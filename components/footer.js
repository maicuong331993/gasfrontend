export default function Footer() {
  return (
    <footer className="relative w-full bottom-0">
      <div className="flex flex-col bg-black items-center text-white text-sm md:text-base space-x-4 space-y-4 py-8">
        <div>
          <a href="#">Terms of Use</a> <span>|</span> <a>Privacy Policy</a>
        </div>
        <address className="text-center">
          Address: 679-2, Shinwol-ri, Chowol-eup, Gwangju-si, Gyeonggi-do Korea
          | Road based address: 169-18, Yongsoo-gil, Chowol-eup, Gwangju-si,
          Gyeonggi-do, Korea
        </address>
        <p>Tel: +82 31-798-0171-4 | Fax: +82 31-798-0175</p>
        <p className="text-center">
          Unauthorized use of copying and copying of all text and images on the
          GSA website is prohibited.
        </p>
        <p className="text-center">
          All images on this site are copyrighted by GSA Co., Ltd. Unauthorized
          copying may result in penalties according to relevant laws.
        </p>
        <p className="text-center">
          Copyright 1993 &#169; GSA - Global Standard Air/Gas All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
