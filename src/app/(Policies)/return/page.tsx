"use client";
// import React from "react";
// import Link from "next/link";
// import { BiArrowBack } from "react-icons/bi";
// import { useRouter } from "next/navigation";
// export default function Return() {
//   const router = useRouter();
//   const onBackHandler = () => {
//     router.push("/");
//   };
//   return (
//     <>
//       <BiArrowBack
//         className="text-5xl hidden md:block  mt-10 ml-10 cursor-pointer bg-gray-600/20  p-3 rounded-full   "
//         onClick={onBackHandler}
//       />
//       <div className=" p-4 md:p-20 flex flex-col gap-10 ">
//         <div className="flex flex-col gap-3">
//           <h1 className="text-3xl font-bold">Return Policy</h1>
//           <p className="text-xl opacity-80">
//             Thank you for shopping with us. At Weugly, we strive to provide you
//             with the best shopping experience. Please note that all sales are
//             final, and we do not accept any returns or exchanges unless the
//             product is damaged or defective upon receipt.
//           </p>
//         </div>
//         <div className="flex gap-8 flex-col">
//           <div className="flex flex-col gap-4">
//             <h1 className="text-3xl font-bold">Damaged or Defective Items</h1>
//             <p className="text-xl opacity-80">
//               In the unlikely event that you receive a damaged or defective
//               item, please contact us within same day of receiving your order.
//               To ensure a prompt resolution, please provide us with your order
//               number, a description and photographs of the damaged or defective
//               product, and any other relevant details.
//               <br />
//               Our team will assess your claim and, if applicable, provide
//               further instructions on the return process. We may offer a
//               replacement, store credit, or refund, depending on the specific
//               situation
//             </p>
//           </div>
//           <div className="flex flex-col gap-4">
//             <h1 className="text-3xl font-bold">Contact Us</h1>
//             <p className="text-xl opacity-80">
//               If you have any questions about our products or this policy,
//               please don&apos;t hesitate to contact us at
//               <Link
//                 href={"https://wa.me/message/F2X4SSL5A4DRC1"}
//                 className="underline mx-3 font-bold text-orange-400"
//                 target="_blank"
//               >
//                 {" "}
//                 Whatsapp
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React from 'react';

const PolicyPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Refund and Shipping Policy</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <p className="mb-4">
          Our Return and Refund Policy was last updated on 24 August 2024. Thank you for shopping at Weugly. If for any reason you are not completely satisfied with a purchase, we invite you to review our policy on refunds and returns.
        </p>
        <p className="mb-4">
          The following terms are applicable for any products that you’ve purchased from us. If any wrong product is delivered, share the image over WhatsApp, and after verification, a new shipment will be shipped in 7-14 working days. Only prepaid orders are accepted.
        </p>
        <p className="mb-4">
          If a shipment gets rejected after the order is shipped, double shipping charges will be deducted, and a refund of the remaining amount will be processed after receiving the RTO shipment within 7-10 business days to the original payment method.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Interpretation and Definitions</h3>
        <h4 className="text-lg font-semibold mb-2">Interpretation</h4>
        <p className="mb-4">
          The words with initial letters capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
        </p>
        <h4 className="text-lg font-semibold mb-2">Definitions</h4>
        <p className="mb-4">
          For the purposes of this Return and Refund Policy:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Company</strong>{' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement)'} refers to Weugly.</li>
          <li><strong>Goods</strong> refers to the items offered for sale.</li>
          <li><strong>Orders</strong> means a request by you to purchase goods from us.</li>
          <li><strong>You</strong> means the individual accessing or using the service, or the company, or other legal entity on behalf of which such individual is accessing or using the service, as applicable.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Your Order Cancellation Rights</h3>
        <p className="mb-4">
          You are entitled to cancel your order within 14 days without giving any reason for doing so. The deadline for canceling an order is 14 days from the date on which you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
        </p>
        <p className="mb-4">
          To exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by sending us an email at <a href="mailto:weuglyindia@gmail.com" className="text-blue-500 underline">weuglyindia@gmail.com</a>.
        </p>
        <p className="mb-4">
          We will reimburse you no later than 14 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Conditions for Returns</h3>
        <p className="mb-4">To be eligible for a return, please make sure that:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The goods were purchased in the last 14 days.</li>
          <li>The goods are in the original packaging.</li>
        </ul>
        <p className="mb-4">
          The following goods cannot be returned:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The supply of goods made to your specifications or clearly personalized.</li>
          <li>The supply of goods which, according to their nature, are not suitable to be returned, deteriorate rapidly, or where the date of expiry is over.</li>
          <li>The supply of goods that are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
          <li>The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
        </ul>
        <p className="mb-4">
          We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-3">Returning Goods</h3>
        <p className="mb-4">
          You are responsible for the cost and risk of returning the goods to us. You should be in touch with use on WhatsApp
        </p>
       
        <p className="mb-4">
          We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend using an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
        <p className="mb-4">
          Domestic Shipping Policy: All orders are processed within 2–7 business days of receipt. If we experience a high volume of orders, shipments may be delayed by a few days. If your shipment experiences a significant delay, we will contact you via email or phone.
        </p>
        <p className="mb-4">
          Shipping charges for your order will be calculated and displayed at checkout.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Standard Ground Shipping: Rs. 50</li>
          <li>Regular Ground: Rs. 100</li>
        </ul>
        <p className="mb-4">
          You will receive a shipment confirmation email with your tracking number once your order has shipped. The tracking number will be active within 48 hours.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
        <p className="mb-4">
          If you have any questions about our Returns and Refunds Policy, please contact us at <a href="mailto:weuglyindia@gmail.com" className="text-blue-500 underline">weuglyindia@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;


