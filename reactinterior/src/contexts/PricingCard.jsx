import React from "react";
// CheckIcon component
const CheckIcon = ({ color = "#6366F1", className = "" }) => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 18 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z" fill={color} />
  </svg>
);

// Individual Pricing Plan Component
const PricingPlan = ({ plan }) => {
  const isPopular = plan.popular;
  
  return (
    <div
      className={`w-72 ${
        isPopular ? "bg-indigo-500 text-white" : "bg-white text-gray-800/80"
      } relative text-center border ${
        isPopular ? "border-gray-500/30" : "border-gray-200"
      } p-6 rounded-lg ${plan.name === "Basic" ? "pb-16" : "pb-14"}`}
    >
      {isPopular && (
        <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">
          Most Popular
        </p>
      )}
      
      <p className="font-semibold pt-2">{plan.name}</p>
      <h1 className="text-3xl font-semibold">
        {plan.price}
        <span className={`text-sm font-normal ${
          isPopular ? "text-white" : "text-gray-500"
        }`}>
          /month
        </span>
      </h1>
      
      <ul className="list-none text-sm mt-6 space-y-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {isPopular ? (
              <CheckIcon color="currentColor" />
            ) : (
              <CheckIcon />
            )}
            <p className={isPopular ? "text-white" : "text-gray-500"}>
              {feature}
            </p>
          </li>
        ))}
      </ul>
      
      <button
        type="button"
        className={`${plan.button.bgColor} ${plan.button.textColor} ${plan.button.hoverColor} text-sm w-full py-2 rounded font-medium mt-7 transition-all`}
      >
        {plan.button.text}
      </button>
    </div>
  );
};

// Main Pricing Card Component
const PricingCard = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      popular: false,
      features: [
        "Access to all basic courses",
        "Community support",
        "10 practice projects",
        "Course completion certificate",
        "Basic code review"
      ],
      button: {
        text: "Get Started",
        bgColor: "bg-indigo-500",
        textColor: "text-white",
        hoverColor: "hover:bg-indigo-600"
      }
    },
    {
      name: "Pro",
      price: "$79",
      popular: true,
      features: [
        "Access to all Pro courses",
        "Priority community support",
        "30 practice projects",
        "Course completion certificate",
        "Advance code review",
        "1-on-1 mentoring sessions",
        "Job assistance"
      ],
      button: {
        text: "Get Started",
        bgColor: "bg-white",
        textColor: "text-indigo-500",
        hoverColor: "hover:bg-gray-200"
      }
    },
    {
      name: "Enterprise",
      price: "$199",
      popular: false,
      features: [
        "Access to all courses",
        "Dedicated support",
        "Unlimited projects",
        "Course completion certificate",
        "Premium code review",
        "Weekly 1-on-1 mentoring",
        "Job guarantee"
      ],
      button: {
        text: "Get Started",
        bgColor: "bg-indigo-500",
        textColor: "text-white",
        hoverColor: "hover:bg-indigo-600"
      }
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {plans.map((plan, index) => (
        <PricingPlan key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingCard;