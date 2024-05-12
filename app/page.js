import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen  font-sans">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/static/person.jpeg" className="max-w-sm rounded-full shadow-2xl border-8 border-neutral-300" />
          <div>
            <h1 className="text-5xl font-bold">欢迎来到燕树成的数字花园!</h1>
            <p className="py-6">若到江南赶上春，请与春同住</p>
            <button className="btn btn-primary">走起~</button>
          </div>
        </div>
      </div>
    </div>
  );
}
