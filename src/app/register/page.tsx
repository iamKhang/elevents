"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import  Header  from "../components/header";

const Register = () => {
  // Form states
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    password: ''
  })

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here, like an API call
    console.log("Form submitted", form)
  }

  return (
    <>
      {/* Header Component */}
      <Header />

      {/* Registration Form */}
      <div className="flex justify-center mt-24 px-4">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Đăng ký</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Họ</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Họ của bạn"
              />
            </div>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Tên</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Tên của bạn"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="Nữ"
                  onChange={handleChange}
                  className="h-4 w-4 text-primary"
                />
                <label htmlFor="gender-female" className="ml-2 block text-sm font-medium text-gray-700">Nữ</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="Nam"
                  onChange={handleChange}
                  className="h-4 w-4 text-primary"
                />
                <label htmlFor="gender-male" className="ml-2 block text-sm font-medium text-gray-700">Nam</label>
              </div>
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Email của bạn"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Mật khẩu của bạn"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                Đăng ký
              </button>
            </div>
          </form>
          <Link href="/" className="mt-4 text-sm text-gray-600 hover:text-black transition-colors block text-center">
            ← Quay lại trang chủ
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register
