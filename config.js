
const businessConfig = {
  // Business Details
  businessName: "Sparkle Clean",
  tagline: "Professional Cleaning Services",

  // Branding
  
branding: {
  primaryColor: "#075E54",
  backgroundColor: "#EDF3F0",
  formBackground: "#FFFFFF",
  textColor: "#1B2D2A",
  accentColor: "#C7A96B",
  borderRadius: "18px",
  logoText: "SC"
},


  // Form Heading and Promotional Content
  content: {
    heading: "A Cleaner Space Starts Here.",
    description:
      "Reliable and professional cleaning services for homes, offices and commercial spaces.",

    // Four promotional benefit lines
    benefits: [
      "Professional Cleaning Team",
      "Flexible Scheduling",
      "Reliable Service",
      "Easy Booking"
    ],

    calloutText: "✨ Book your cleaning service today.",
    buttonText: "Press to Book"
  },

  // Form Configuration
  form: {
    title: "Request a Quote",

    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: true
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        required: false
      },
      {
        name: "service",
        label: "Service Required",
        type: "select",
        placeholder: "Choose a service",
        required: true,
        options: [
          "Home Cleaning",
          "Office Cleaning",
          "Deep Cleaning",
          "Move-in / Move-out Cleaning"
        ]
      },
      {
        name: "preferredDate",
        label: "Preferred Date",
        type: "date",
        required: true
      },
      {
        name: "preferredTime",
        label: "Preferred Time",
        type: "select",
        placeholder: "Choose a time",
        required: true,
        options: [
          "Morning",
          "Afternoon",
          "Evening"
        ]
      },
      {
        name: "serviceAddress",
        label: "Service Address",
        type: "text",
        placeholder: "Enter your full address",
        required: true
      },
      {
        name: "additionalRequirements",
        label: "Additional Requirements",
        type: "textarea",
        placeholder: "Tell us about your requirements",
        required: false
      }
    ]
  }
};
