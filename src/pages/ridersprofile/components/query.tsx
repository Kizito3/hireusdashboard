import { Checkbox } from "@/components/ui/checkbox";

export default function Query() {
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
      }
  return (
    <section className="mt-12">
      <div>
        <h2 className="text-xl font-[600]">
          Please describe why you want Us to help you
        </h2>
      </div>
      <form className="mt-10" onSubmit={onSubmit}>
        <div className="mb-4">
          <Checkbox />{" "}
          <span className="md:pl-3 text-sm">
            I'm experiencing technical issues with the app. Can you assist me?
          </span>
        </div>
        <div className="mb-4">
          <Checkbox />{" "}
          <span className="md:pl-3 text-sm">
            Can I request a refund for a ride that didn't meet expectations?
          </span>
        </div>
        <div className="mb-4">
          <Checkbox />{" "}
          <span className="md:pl-3 text-sm">
            How does the platform ensure rider safety and security?
          </span>
        </div>
        <div className="mb-4">
          <Checkbox />{" "}
          <span className="md:pl-3 text-sm">
            Can you provide information about promotions or discounts available?
          </span>
        </div>
        <div className="mb-6">
          <Checkbox /> <span className="md:pl-3 text-sm">Others</span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Query"
            cols={30}
            rows={10}
            className="w-full max-w-[570px] outline-none p-2 bg-transparent  border border-gray-300 rounded"
          ></textarea>
        </div>
        <div className=" mt-7 text-white">
          <button
            type="submit"
            className="bg-tertiary py-3 px-7 rounded-md hover:bg-transparent hover:border hover:border-tertiary hover:text-tertiary transition ease-in-out"
          >
           Send Query
          </button>
        </div>
      </form>
    </section>
  );
}
