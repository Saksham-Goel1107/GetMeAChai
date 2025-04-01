"use client"
import React, { useEffect, useState } from 'react';
import { useSession, signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

const Dashboard = () => {
    const { data: session, status, update } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({});

    useEffect(() => {
        if (status === "loading") return; // Avoid mismatches while loading session
        if (status === "unauthenticated") {
            router.push('/login'); // Redirect if not logged in
        } else if (session) {
            getData();
        }
    }, [status, session]);

    const getData = async () => {
        if (session?.user) {
            setForm({
                name: session.user.name || "",
                email: session.user.email || "",
                username: session.user.username || "",
                profilepic: session.user.profilepic || "",
                coverpic: session.user.coverpic || "",
                razorpayid: session.user.razorpayid || "",
                razorpaysecret: session.user.razorpaysecret || ""
            });
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload

        if (!session?.user?.name) return;
        
        try {
            await update({ name: form.name }); // Update user profile (if applicable)
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (status === "loading") return <p className="text-center">Loading...</p>; // Prevent hydration mismatch

    return (
        <div className='container mx-auto py-5 px-6'>
            <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className='my-2'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input 
                        value={form.name} 
                        onChange={handleChange} 
                        type="text" 
                        name='name' 
                        id="name" 
                        className="block w-full p-2 border rounded-lg" 
                        
                        readOnly
                    />
                </div>

                {/* Email Input */}
                <div className="my-2">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input 
                        value={form.email} 
                        onChange={handleChange} 
                        type="email" 
                        name='email' 
                        id="email" 
                        className="block w-full p-2 border rounded-lg" 
                        
                        readOnly
                    />
                </div>

                {/* Username Input */}
                <div className='my-2'>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
                    <input 
                        value={form.username} 
                        onChange={handleChange} 
                        type="text" 
                        name='username' 
                        id="username" 
                        className="block w-full p-2 border rounded-lg" 
                        suppressHydrationWarning={true}
                    />
                </div>

                {/* Profile Picture Input */}
                <div className="my-2">
                    <label htmlFor="profilepic" className="block mb-2 text-sm font-medium">Profile Picture</label>
                    <input 
                        value={form.profilepic} 
                        onChange={handleChange} 
                        type="text" 
                        name='profilepic' 
                        id="profilepic" 
                        className="block w-full p-2 border rounded-lg" 
                        suppressHydrationWarning={true}
                    />
                </div>

                {/* Cover Picture Input */}
                <div className="my-2">
                    <label htmlFor="coverpic" className="block mb-2 text-sm font-medium">Cover Picture</label>
                    <input 
                        value={form.coverpic} 
                        onChange={handleChange} 
                        type="text" 
                        name='coverpic' 
                        id="coverpic" 
                        className="block w-full p-2 border rounded-lg" 
                        suppressHydrationWarning={true}
                    />
                </div>

                {/* Razorpay ID Input */}
                <div className="my-2">
                    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium">Razorpay Id</label>
                    <input 
                        value={form.razorpayid} 
                        onChange={handleChange} 
                        type="text" 
                        name='razorpayid' 
                        id="razorpayid" 
                        className="block w-full p-2 border rounded-lg" 
                        suppressHydrationWarning={true}
                    />
                </div>

                {/* Razorpay Secret Input */}
                <div className="my-2">
                    <label htmlFor="razorpaysecret" className="block mb-2 text-sm font-medium">Razorpay Secret</label>
                    <input 
                        value={form.razorpaysecret} 
                        onChange={handleChange} 
                        type="text" 
                        name='razorpaysecret' 
                        id="razorpaysecret" 
                        className="block w-full p-2 border rounded-lg" 
                        suppressHydrationWarning={true}
                    />
                </div>

                {/* Submit Button */}
                <div className="my-6">
                    <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Dashboard;
