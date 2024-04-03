import React, { FormEvent, useState } from "react";
import styles from "../styles/ContactUs.module.scss";
import SectionHeader from "@/common/SectionHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useToasts } from "react-toast-notifications";

export default function ContactPageOne() {
  const [loader, setLoader] = useState<boolean>(false);
  const { addToast } = useToasts();
  const [data, setData] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const theme = useSelector((state: RootState) => state?.theme);
  const handleContact = async (event: FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setLoader(false);
        addToast("We will contact you soon...");
        setData({});
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <div
      id="contact-us"
      className={`mt-32 ${styles["contact-us"]} ${
        theme === "m-light" ? styles["l-contact-us"] : ""
      }`}
    >
      <SectionHeader header={"Contact Us"} />
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div
            className={`${styles["contect-us"]} ${
              theme === "m-light" ? styles["l-contect-us"] : ""
            } w-[45%]`}
          >
            <form className="space-y-4" onSubmit={handleContact}>
              <div className="grid items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="first_name"
                >
                  Name
                </label>
                <input
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  type="text"
                  id="first_name"
                  name="name"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="grid items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label
                  className="text-sm font-medium leading-none text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex border bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none rounded text-gray-300"
                  id="message"
                  name="message"
                  onChange={(e) =>
                    setData({ ...data, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <input
                  type="submit"
                  className={`rounded-md text-sm font-semibold ${styles["contact-us-submit"]}`}
                  value={loader ? "Sending message..." : "Send Message"}
                />
              </div>
            </form>
          </div>
          <div className={styles["contact-text-right"]}>
            <p>
              We'd love to help you out with any queries or service-related
              information at the earliest. Please drop in a line.
            </p>
            <div>
              <p>Working Hours</p>
              <p>
                10 AM to 6 PM IST <br />
                Mon - Sat
              </p>
            </div>
            <div>
              <p
                style={{
                  color:
                    theme === "m-light"
                      ? "rgba(236, 37, 70, 0.769)"
                      : "#B34400",
                  fontSize: "20px",
                }}
              >
                growwitup@growwitup.in
              </p>
              <p>Trusted by many creators.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
