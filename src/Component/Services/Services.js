import React from 'react';
import { BsUiChecksGrid } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import calibration from '../../images/calibration.jpg';
import designspark from '../../images/cat-designspark.jpg';
import invoicing from '../../images/cat-invoicing.jpg';
import delivery_options from '../../images/delivery_options.jpg';
import procurement_solutions from '../../images/procurement_solutions.jpg';
import product_support from '../../images/product_support.jpg';


const Services = () => {
    return (
      <div className="m-10 font-serif">
        <h1 className="text-center text-3xl text-blue-500">
          Connect to a full range of services
        </h1>
        <div className="bg-blue-900 h-[3px] mx-16 my-4"></div>
        <div>
          <p className="text-center text-xl my-5">
            From fast delivery of products available on Singapore warehouse to
            procurement solutions, find a range of helpful services to improve
            your productivity, saving you time and money.
          </p>
          <div
            className="grid grid-cols-3 gap-10 my-12
          "
          >
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={procurement_solutions}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Procurement Solutions
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Get the support you need to make your procurement process as
                efficient as possible. Our experienced teams are here to help
                you consolidate vendors, remove complexity and reduce waste
                within your process.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={designspark}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                DesignSpark
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                You got into engineering to invent & design - Our exclusive
                platform will help you focus on innovation whilst maximising
                your efficiency.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={product_support}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Product Support
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Never get stuck again. We offer easy access to product support
                resources - online or by phone.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={delivery_options}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Delivery Options
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                With a range of flexible delivery and collection options we make
                it easy for you to receive your order when and where you need
                it.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={invoicing}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Invoicing and Payment
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Stay in control of your spend & reduce your purchase to pay
                costs with our invoicing and payment services.
              </p>
            </div>
            <div className="border hover:border-blue-500 rounded-xl">
              <img
                className="w-full h-[200px] rounded-xl rounded-b-none"
                src={calibration}
                alt=""
              />
              <h1 className="text-center text-2xl text-blue-500 my-5">
                Calibration
              </h1>
              <p className="text-lg mb-2 text-gray-400 px-3">
                Whether it's existing equipment or a new purchase, you need to
                have confidence in the accuracy of your measurements. That's
                where our calibration service can help.
              </p>
            </div>
          </div>
          <div className="bg-blue-900 h-[6px] my-6"></div>
          <div>
            <h1 className="text-2xl text-blue-500 font-semibold my-6">
              Other Services
            </h1>
            <div className="grid grid-cols-2 gap-12">
              <div className="flex justify-center items-center bg-slate-200 py-4 rounded-lg">
                <div className="text-5xl text-blue-600 mx-5 bg-white p-5 border-2 rounded-full border-slate-400">
                  <VscAccount />
                </div>
                <div>
                  <h1 className="text-xl text-blue-500">RS Credit</h1>
                  <p className="my-4">
                    Enjoy credit terms on your RS orders. Applications are
                    approved within 2-5 business days.
                  </p>
                  <p className="text-lg text-blue-500">Reed more -></p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-slate-200 py-4 rounded-lg">
                <div className="text-5xl text-blue-600 mx-5 bg-white p-5 border-2 rounded-full border-slate-400">
                  <MdManageAccounts />
                </div>
                <div>
                  <h1 className="text-xl text-blue-500">
                    Purchasing Manager<sup className=" ml-1">MT</sup>
                  </h1>
                  <p className="my-4">
                    A free web order management solution that helps you manage
                    your spend, whilst providing visibility of orders placed
                    through the RS website.
                  </p>
                  <p className="text-lg text-blue-500">Reed more -></p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-slate-200 py-4 rounded-lg">
                <div className="text-5xl text-blue-600 mx-5 bg-white p-5 border-2 rounded-full border-slate-400">
                  <BsUiChecksGrid />
                </div>
                <div>
                  <h1 className="text-xl text-blue-500">
                    Blanket Purchase Orders
                  </h1>
                  <p className="my-4">
                    Blanket orders provide control over fixed budgets - reducing
                    admin. We make it easy to manage - allowing you to order
                    against a single PO. We also help control blanket orders
                    using total order value, monthly spend or date limits.
                  </p>
                  <p className="text-lg text-blue-500">Reed more -></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;