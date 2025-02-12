const TermsCheckBox = () => {
    return (
        <div className="mt-8">
          <label className="flex items-start text-gray">
            <input type="checkbox" className="mt-1" />
            <span className="text-gray text-base ml-3 text-left">
              I confirm that I have read and accepted the terms and conditions before
              proceeding with payment, acknowledging my understanding and agreement
              with them

            </span>
          </label>
          <ConfirmAndPayButton/>
        </div>
    );
};

const ConfirmAndPayButton = () => {
    return (
        <div className="flex justify-end">
          <button className=" bg-green text-sm text-white py-4 px-10 rounded-lg font-semibold mb-20 mx-16">
            Confirm & Pay
          </button>
        </div>


    );
};

export default TermsCheckBox;