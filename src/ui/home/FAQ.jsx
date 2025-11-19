import FAQCard from "./FAQCard";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer:
      'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
  {
    question: "Can I change my email address?",
    answer:
      'Yes, go to your account settings and click on "Change Email" to update your email address.',
  },
  {
    question: "How do I delete my account?",
    answer:
      'Navigate to account settings, select "Delete Account," and follow the prompts to permanently remove your account.',
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, we take privacy seriously. All personal information is encrypted and securely stored.",
  },
  {
    question: "How do I contact support?",
    answer:
      'You can reach our support team via the "Contact Us" page or email us at support@example.com.',
  },
  {
    question: "Do you offer mobile apps?",
    answer:
      "Yes, our app is available on both iOS and Android. Download it from the App Store or Google Play Store.",
  },
  {
    question: "Can I subscribe to newsletters?",
    answer:
      'Yes, you can subscribe to our newsletter in your account settings under "Notifications."',
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, all fees and charges are clearly displayed before completing any transaction.",
  },
];

const FAQ = () => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center text-base-content/75">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-base-content/55">
        Find answers to the most common questions about your account and our
        services.
      </p>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQCard key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
