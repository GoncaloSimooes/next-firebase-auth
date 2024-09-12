"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { register } from "@/actions/register";

export default function Register() {
  // State to manage error messages
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Renaming ref to avoid conflicts
  const formRef = useRef<HTMLFormElement>(null); 

  // Submit handler function
  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,    
    });

    // Clear the form after submission
    formRef.current?.reset();

    // Check if there is an error in the response
    if (r?.error) {
      setError(r.error); // Set the error in the state
      return;
    } else {
      setError(null); // Clear the error if registration is successful
      router.push("/success"); // Redirect to a success page
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        ref={formRef} // Using the renamed ref
        action={handleSubmit}
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
                    border border-solid border-black bg-white rounded"
      >
        {/* Display the error message if it exists */}
        {error && <div className="text-red-500 mb-2">{error}</div>}

        <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

        <label className="w-full text-sm">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
          name="name"
        />

        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
          name="email"
        />

        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
            name="password"
          />
        </div>

        <button
          className="w-full border border-solid border-black py-1.5 mt-2.5 rounded
                    transition duration-150 ease hover:bg-black"
        >
          Sign up
        </button>

        <Link
          href="/login"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black"
        >
          Already have an account?
        </Link>
      </form>
    </section>
  );
}
