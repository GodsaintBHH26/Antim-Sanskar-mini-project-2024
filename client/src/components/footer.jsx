function FootContact() {
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#a6aed2] to-[#333333] h-64 mt-16">
        <h1 className="p-2 font-bold font-josefin pt-4">Contact</h1>
        <hr />

        <div className="flex-col flex justify-evenly pt-5 items-center">
          <h3 className="font-josefin text-2xl font-bold">Socials</h3>
          <div className="flex justify-center gap-7 text-3xl pt-5">
            <i class="ri-facebook-circle-fill hover:cursor-pointer"></i>
            <i class="ri-mail-fill hover:cursor-pointer"></i>
            <i class="ri-instagram-fill hover:cursor-pointer"></i>
            <i class="ri-linkedin-box-fill hover:cursor-pointer"></i>
            <i class="ri-youtube-fill hover:cursor-pointer"></i>
            <i class="ri-twitter-x-fill hover:cursor-pointer"></i>
          </div>
        </div>

        <div className="flex gap-5 justify-center pt-5">
          <a href="#" className=" hover:underline no-underline ">Privacy & Policy</a>
          <a href="#" className=" hover:underline no-underline ">Terms</a>
          <a href="#" className=" hover:underline no-underline ">FAQs</a>
          <a href="#" className=" hover:underline no-underline ">About Us</a>
          <a href="#" className=" hover:underline no-underline ">Contribute</a>
          <a href="#" className=" hover:underline no-underline ">Useful Links</a>
        </div>
      </div>
    </>
  );
}

export default FootContact;
