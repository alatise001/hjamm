/**
 * Prayer Request Email Service
 * Sends a prayer request notification to the ministry via EmailJS
 */

export async function sendPrayerRequestEmail(prayerData) {
    try {
        const formData = new FormData();

        // EmailJS Configuration
        const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
        const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;
        const ministryEmail = process.env.NEXT_PUBLIC_MINISTRY_EMAIL;

        if (!serviceId || !templateId || !publicKey || !ministryEmail) {
            throw new Error("Missing EmailJS configuration.");
        }

        formData.append("service_id", serviceId);
        formData.append("template_id", templateId);
        formData.append("user_id", publicKey);

        if (privateKey) {
            formData.append("accessToken", privateKey);
        }

        // Recipient
        formData.append("to_email", ministryEmail);

        // Prayer Request Information
        formData.append("name", prayerData.name || "Anonymous");
        formData.append("email", prayerData.email || "Not Provided");

        formData.append(
            "urgent",
            prayerData.urgent ? "YES - URGENT REQUEST" : "No"
        );

        formData.append(
            "message",
            prayerData.message || "No prayer intention provided."
        );

        formData.append(
            "submitted_at",
            new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "short",
            })
        );

        console.log(
            `📧 Sending prayer request from ${prayerData.name || "Anonymous"}`
        );

        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send-form",
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        console.log("✅ Prayer request email sent successfully.");

        return {
            success: true,
            message: "Prayer request submitted successfully.",
        };
    } catch (error) {
        console.error("❌ Prayer request email failed:", error);

        return {
            success: false,
            error: error.message,
        };
    }
}