import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import Music from "@/components/Music";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        <ContentSection
          id="AboutUs"
          eyebrow="About Us"
          title="Get to know more"
          urduParagraphs={[
            "ہمارا تعارف — یہ ایک عالمی معیار ہے۔ جس کا مقصد دنیا بھر میں امن، نیکی، پاکیزگی، ہمدردی اور اسی طرح کی دیگر اقدار کی ترویج کرنا ہے۔ یہ دنیا بھر میں مساوات، محبت اور باہمی احترام کے اصولوں پر کام کرتا ہے اور اسی مقصد کے تحت اپنے مراکز میں مختلف رسمی اور عملی کورسز فراہم کرتا ہے۔ ان کورسز میں گوڈلی نالج کورس، رابطۂ سلطنت کورس، پرسکون زندگی کورس، ریلیشن شپ مینجمنٹ کورس وغیرہ شامل ہیں۔ یہ تمام کورسز معاشرے کے تمام طبقات کو بلکل مفت فراہم کیے جاتے ہیں۔",
          ]}
          romanParagraphs={[
            "Hamaara Taaruf — Yeh ek aalami miyaar hai. Jis ka maqsad duniya bhar mein aman, neki, pakeezgi, hamdardi aur isi tarah ki deegar iqdaar ki tarweej karna hai. Yeh duniya bhar mein masaawat, mohabbat aur baahmi ehteraam ke usoolon par kaam karta hai aur isi maqsad ke tahat apne marakaz mein mukhtalif rasmi aur amali courses faraham karta hai.",
            "In courses mein Godly Knowledge Course, Rabta-e-Saltanat Course, Pursukoon Zindagi Course, Relationship Management Course waghera shaamil hain. Yeh tamam courses muashray ke tamam tabaqat ko bilkul muft faraham kiye jaate hain.",
          ]}
          media={[
            {
              label: "About us portrait",
              src: "/images/about.jpg"
            }
          ]}
        />

        <ContentSection
          id="Wisdom"
          eyebrow="Wisdom"
          title="Hikmat"
          tone="panel"
          reverse
          urduParagraphs={[
            "حکمت اور دانائی آپ کو اپنی زندگی اور دوسروں کی زندگی کے تجربات سے سیکھنے کی بنیاد فراہم کرتے ہیں۔ جس کی بناء پر آپ درست فیصلہ کرنا اور ذہانت سے کام لینا سیکھتے ہیں۔ یہ آپ کے لیے فائدے مند ہے۔",
            "ایک عقلمند شخص عام طور پر دوسروں کے ساتھ معاملہ کرنے میں ایماندار اور منصفانہ ہوتا ہے۔ سادہ، خوش اور پُرسکون، زندگی میں سب کے لیے ہمدردی اور مساوات سے بھرپور تعاون کرنے والا اور بہت ہی قابل قبول اور کامیاب ہوتا ہے۔",
          ]}
          romanParagraphs={[
            "Hikmat aur danayi aapko apni zindagi aur doosron ki zindagi ke tajurbaat se seekhne ki buniyad faraham karti hain. Iski buniyad par aap durust faisla karna aur zihanat se kaam lena seekhte hain. Yeh aap ke liye faida mand hai.",
            "Ek aqalmand shakhs aam tor par doosron ke saath mamla karne mein imandaar aur munsif hota hai. Saada, khush aur pur-sukoon, zindagi mein sab ke liye hamdardi aur masawaat se bharpoor taawun karne wala aur bohot hi qabil-e-qabool aur kamiyab hota hai.",
          ]}
          ctaLabel="More Info"
          ctaHref="https://mannat.app/wisdom/"
          media={[
            
            {
              label: "Verses of the Holy Quran",
              src: "/images/quran-verses.jpg"
            },
            
            {
              label: "IRM-03",
              src: "/images/IRM-03.jpg"
            },
          ]}
        />

        <ContentSection
          id="Meditation"
          eyebrow="Meditation"
          title="Raabta-e-Saltanat"
          urduParagraphs={[
            "رابطہ سلطنت آپ کو اپنے بارے میں واضح روحانی سمجھ دیتا ہے۔ یہ آپ کے اندر پہلے سے موجود فضیلت اور طاقتوں کو دوبارہ تلاش کرنے اور استعمال کرنے میں مدد کرتا ہے۔ یہ آپ کو ہر چیز کے بارے میں پازیٹو رویہ پیدا کرنے اور نئے جواب تلاش کرنے کے قابل بناتا ہے۔ رابطہ سلطنت ایک آسان، قدرتی، کھلی آنکھوں سے کی جانے والی تکنیک ہے، جسے کوئی بھی، کہیں بھی استعمال کر سکتا ہے۔ اور اس کی مسلسل پریکٹس سے اپنی زندگی بہترین بنا سکتا ہے۔",
          ]}
          romanParagraphs={[
            "Raabta-e-Saltanat aapko apne baare mein wazeh roohani samajh deta hai. Yeh aapke andar pehle se mojood fazilat aur taqat ko dobara dhoondhne aur istemal karne mein madad karta hai. Yeh aapko har cheez ke baare mein positive rawayya paida karne aur naye jawab dhoondhne ke qabil banata hai.",
            "Raabta-e-Saltanat ek aasaan, qudrati, khuli aankhon se ki jaane wali technique hai, jise koi bhi, kahin bhi istemal kar sakta hai. Aur iski musalsal practice se apni zindagi behtarin bana sakta hai.",
          ]}
          ctaLabel="Join Meditation Class"
          ctaHref="https://mannat.app/meditation"
          media={[
            {
              label: "Meditation Session",
              type: "video",
              src: "/images/meditation.mp4",
              ratio: "aspect-[9/16]",
            },
          ]}
        />

        <ContentSection
          id="Health"
          eyebrow="Health"
          title="Sehat"
          tone="panel"
          reverse
          urduParagraphs={[
            "صحت — عالمی ادارے کے مطابق جسمانی، ذہنی، روحانی اور سماجی طور پر مکمل صحت مند ہونا ہی اصل صحت ہے۔ لوگ عام طور پر جسمانی صحت کے حصول کے لیے وقت اور دیگر وسائل صرف کرتے ہیں۔ اور صحت کے دیگر تین اصولوں کو نظر انداز کر دیتے ہیں۔ تاہم یہاں برہما کماریوں میں ذہنی، روحانی نشونما کے ساتھ ساتھ سماجی صحت اورعبادات کو بھی کافی اہمیت دی جاتی ہے۔ ہمارے ذریعہ سکھائی گئی رابطہ سلطنت (ریاضت) کے ذریعےصالح اقدار کو فروغ دینے میں مدد کرتی ہے۔ جس سے اخلاص، خوشی اور بہت سی روحانی طاقت حاصل ہوجاتی ہیں اور تناؤ سے نجات والی زندگی مل جاتی ہے۔",
          ]}
          romanParagraphs={[
            "Sehat — Alami idaare ke mutabiq jismaani, zehni, roohani aur samaji tour par mukammal sehat mand hona hi asal sehat hai. Log aam tour par jismaani sehat ke hosool ke liye vakt aur deegar vsaail sarf karte hai, aur sehat ke deegar teen usoolon ko nazar andaaz kar dete hai.",
            "Taahum yahaan Brahma Kumaris mein zehni, roohani nashonuma ke saath saath samaji sehat aur ibaadat ko bhi kaafi ahamiyat di jaati hai. Hamare zariye sikhaai gayi Raabta-e-Saltanat (riyazat) ke zariye saaleh iqdaar ko faroog dene mein madad karti hai, jis se ikhlaas, khushi aur bohot saari roohani taqat haasil ho jaati hai, aur tanaav se nijaat waali zindagi mil jaati hai.",
          ]}
          ctaLabel="More Info"
          ctaHref="https://mannat.app/health/"
          media={[
            
            {
              label: "Ramadan iftar spread",
              src: "/images/health-1.jpg"
            },
            
            {
              label: "BB-42",
              src: "/images/health-2.jpg"
            },
          ]}
        />

        <ContentSection
          id="NooraniKalemaat"
          eyebrow="Noorani Kalemaat"
          title="Noorani Kalemaat"
          urduParagraphs={[
            "نورانی کلمات — یہ خدائی کلمات ہیں۔ یہ نہایت فخر، خوشی اور راحت کے کلمات ہیں۔ جسے اللہ تعالیٰ بیان فرماتے ہیں۔ تاکہ بے حیائی، بددیانتی، لاقانونیت اور افراتفری کودورکیا جا سکے اور ایک نئی پاکیزہ اور پیاری دنیا كا قیام دوبارہ اس سرزمین پرکیا جا سکے۔ اللّٰہ تعالیٰ زندگی اور موت سے بالاتر ہیں۔ وہ ان چکّروں میں نہیں آتے، وہ بچوں کی مانند ماں کی گود سے ولادت نہیں لیتے ہیں، بلکہ اسے اپنے مشن کی تکمیل کے لیے انسانی جسم کی ضرورت ہوتی ہے۔",
            "اس لیے اس نے ایک بزرگ انسان کے جسم کو اختیارکیا، تا کہ انسانوں کو انسانی زبان میں حقیقت سے روشناس کراسکے۔ یہ روزآنہ برہما کماریوں کے طلباء کو پوری دنیا میں اس کے تمام مراکز پر پڑھے جاتے ہیں۔ نورانی کلمات مکمل روحانی تبدیلی کو بااختیار بنانے اور انسانی روحوں کی تکمیل میں مدد کرتے ہیں۔",
          ]}
          romanParagraphs={[
            "Noorani Kalemaat — Yeh Khudaai kalemaat hain. Yeh nihayat fakhar, khushi aur rahat ke kalemaat hain, jise Allah Ta'ala bayan farmaate hain, taaki be hayaai, baddayaanati, la-qaanooniat aur afraatafri ko door kiya ja sake aur ek naye paak aur pyaari duniya ka qayaam dobara is zameen par kiya ja sake.",
            "Allah Ta'ala zindagi aur maut se baalaatar hain. Yeh rozana Brahma Kumariyon ke talib-e-ilm ko poori duniya mein iske tamam markaz par padhe jaate hain. Noorani Kalemaat aur Raabta-e-Saltanat course students ko buraiyon par fatah haasil karne ke qabil banate hain, jo mohabbat, aman, paakizgi aur khushi jaise ilahi iqdar ka ehsaas dete hain.",
          ]}
          ctaLabel="Discover More"
          ctaHref="https://mannat.app/noorani-kalemaat/"
          media={[
            {
              label: "BB-42",
              src: "/images/kalemaat.jpg"
            },
          ]}
        />

        {/* "The best richness is the richness of the soul" slogan strip */}
        <section className="bg-panel py-16 text-center sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-2xl italic text-ivory sm:text-3xl">
              The best richness is the richness of the soul
            </h2>
            <p className="mt-4 leading-relaxed text-ivory-dim">
              Hikmat aur danai aap ko apni zindagi aur doosro ki zindagi ke
              tajurbaat se seekhne ki buniyad fraham karti hai.
            </p>
            <div className="mt-7 flex justify-center">
              <a
                href="#Wisdom"
                className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm uppercase tracking-[0.2em] text-gold-soft transition-colors hover:border-gold-soft"
              >
                Read Slogans <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <Music />
      </main>

      <Footer />
    </>
  );
}
