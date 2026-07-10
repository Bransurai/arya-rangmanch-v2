function Photo({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <img
      src={`/photos/${name}.jpg`}
      alt="Arya Kathak performance"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

const glossary = [
  [
    "Nritta",
    "Pure dance focused on rhythm, movement, footwork, and technical precision.",
  ],
  [
    "Nritya",
    "Expressive dance that combines movement with emotion and storytelling.",
  ],
  [
    "Tatkaar",
    "The foundational rhythmic footwork patterns used throughout Kathak.",
  ],
  [
    "Chakkar",
    "Controlled spins performed with balance, speed, and precision.",
  ],
  [
    "Tihai",
    "A rhythmic phrase repeated three times and completed on the sam.",
  ],
  [
    "Aamad",
    "A traditional entrance composition that introduces the dancer.",
  ],
  [
    "Toda",
    "A short rhythmic composition that highlights the dancer’s technique.",
  ],
  [
    "Paran",
    "A powerful rhythmic composition inspired by pakhawaj drum patterns.",
  ],
  [
    "Thaat",
    "A graceful opening sequence using stylized posture and controlled movement.",
  ],
  [
    "Abhinaya",
    "Expressive storytelling through facial expressions, gestures, and emotion.",
  ],
  [
    "Taal",
    "The repeating rhythmic cycle that structures a musical composition.",
  ],
  [
    "Sam",
    "The first and most important beat of a rhythmic cycle.",
  ],
];

const artists = [
  [
    "Guru Ruchi Lamba",
    "Founder and artistic director of the Indian Dance Training Center, Ruchi Lamba is a mentor, performer, and visionary who trains students in Kathak with devotion, discipline, and heart.",
  ],
  [
    "Hemant Ekbote",
    "A distinguished tabla artist and teacher, Hemant Ekbote brings depth, precision, and rhythmic mastery to the evening.",
  ],
  [
    "Radhika Ekbote",
    "A Hindustani classical vocalist, performer, and teacher, Radhika brings musical grace and expression to the performance.",
  ],
  [
    "Niravroh Laha",
    "An accomplished sitar musician and aerospace engineer, Niravroh brings a refined classical sound to the stage.",
  ],
  [
    "Dani Ekbote",
    "Dani Ekbote is a tabla artist and percussionist trained under Shri Hemant Ekbote, Pandit Yogesh Samsi, and through workshops with Ustad Zakir Hussain. He performs across Indian classical, Sufi, Bollywood, jazz, and fusion music, and also works as a studio recording musician.",
  ],
];

const program = [
  ["Ganesh Vandana", "Raag: Bhoopali • Taal: Addha"],
  ["Shiva Vandana", "Raag: Hamsadhwani • Taal: Teentaal"],
  ["Shankar Tarana", "Raag: Shankara • Taal: Dhamaar"],
  [
    "Shuddha Nritya",
    "Laya: Vilambit, Madhya, Drut • Sool Taal and Teentaal",
  ],
  ["Mhaara Ghat Maa", "Taal: Bhajani"],
  ["Twin Dedication Dance", "A Special Dedication"],
  ["Concept Piece", "A Surprise Presentation"],
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#fff8ec] text-[#2a1608]">
      <nav className="fixed top-0 z-50 w-full px-3">
        <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-[#d7b56d]/30 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-xl md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#b8860b]" />

            <p className="truncate font-serif text-xs tracking-[0.14em] text-[#9b6b16] sm:text-base sm:tracking-[0.18em] md:text-lg">
              ARYA&apos;S RANGMANCH
            </p>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#kathak"
              className="text-sm text-[#5a3b20] transition hover:text-[#b8860b]"
            >
              Kathak
            </a>

            <a
              href="#arya"
              className="text-sm text-[#5a3b20] transition hover:text-[#b8860b]"
            >
              Arya
            </a>

            <a
              href="#artists"
              className="text-sm text-[#5a3b20] transition hover:text-[#b8860b]"
            >
              Artists
            </a>

            <a
              href="#program"
              className="text-sm text-[#5a3b20] transition hover:text-[#b8860b]"
            >
              Program
            </a>
          </div>

          <a
            href="#program"
            className="ml-3 shrink-0 rounded-full border border-[#b8860b]/40 px-3 py-2 text-xs text-[#8a5c12] transition hover:bg-[#fff8ec] sm:px-4 sm:text-sm"
          >
            Program
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Photo
            name="DSC_5121"
            className="object-[58%_center] sm:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#180d05]/90 via-[#180d05]/60 to-[#180d05]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180d05]/60 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8 md:px-16">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#e0bd70] sm:text-sm">
              Arya&apos;s Rangmanch
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-7xl md:text-8xl">
              Arya Bhavsar
            </h1>

            <h2 className="mt-5 text-xl text-white/85 sm:text-2xl md:text-3xl">
              Kathak Rangmanch Pravesh
            </h2>

            <div className="mt-8 h-px w-32 bg-[#d7b56d]" />

            <p className="mt-8 text-base leading-8 text-white/80 sm:text-lg">
              July 11th, 2026
              <br />
              Lake Forest Performing Arts Theater
            </p>
          </div>
        </div>
      </section>

      <section
        id="kathak"
        className="scroll-mt-28 px-5 py-16 sm:px-8 md:px-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
              The Tradition
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              What is Kathak?
            </h2>

            <p className="mt-6 text-base leading-8 text-[#4d321c] sm:text-lg sm:leading-9">
              Kathak is one of the major classical dance traditions of India,
              originating from the storytellers of North India known as
              Kathakars. Over centuries, it evolved from temple storytelling
              into a sophisticated performance art that combines intricate
              footwork, graceful spins, expressive gestures, and rhythmic
              precision.
            </p>

            <p className="mt-5 text-base leading-8 text-[#4d321c] sm:text-lg sm:leading-9">
              A traditional Kathak performance balances technical mastery with
              emotional storytelling. Through Nritta, or pure dance, and Nritya,
              or expressive dance, performers bring rhythm, music, and narrative
              together to create an art form that is both visually captivating
              and deeply meaningful.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Photo
              name="DSC_5244"
              className="h-56 rounded-3xl sm:h-72 md:h-80"
            />

            <Photo
              name="DSC_5458"
              className="h-56 rounded-3xl sm:h-72 md:mt-10 md:h-80"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 h-px max-w-7xl bg-[#d7b56d]/50" />

        <div className="mx-auto mt-12 max-w-7xl rounded-[2rem] border border-[#d7b56d]/70 bg-white/65 p-6 shadow-sm sm:p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
            Words of the Art Form
          </p>

          <h3 className="mt-3 font-serif text-3xl text-[#8a5c12] sm:text-4xl">
            Kathak Glossary
          </h3>

          <div className="mt-8 grid gap-x-10 gap-y-6 text-[#4d321c] md:grid-cols-2">
            {glossary.map(([term, definition]) => (
              <div
                key={term}
                className="border-b border-[#d7b56d]/35 pb-5"
              >
                <h4 className="font-serif text-xl text-[#8a5c12]">
                  {term}
                </h4>

                <p className="mt-2 leading-7">{definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-[#2a1608] px-5 py-24 text-white sm:px-8 md:min-h-[80vh] md:px-16">
        <div className="absolute inset-0 opacity-45">
          <Photo name="DSC_5172" />
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col justify-center text-center md:min-h-[80vh]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#e0bd70] sm:text-sm">
            A Sacred Milestone
          </p>

          <h2 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl">
            Entry Onto the Stage
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/85 sm:text-xl sm:leading-10">
            To witness a Rangmanch Pravesh is to witness the moment a student
            becomes an artist. Meaning “Entry Onto the Stage,” it is a sacred
            milestone in the Kathak tradition that marks years of dedication,
            discipline, and devotion to the art form. For Arya, this evening
            represents more than a decade of training under the guidance of Guru
            Ruchi Lamba, countless hours of practice, and a deep connection to
            her culture and heritage.
          </p>
        </div>
      </section>

      <section
        id="arya"
        className="scroll-mt-28 px-5 py-16 sm:px-8 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
              The Dancer
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              About Arya
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="grid gap-4">
              <Photo
                name="DSC_5196"
                className="h-[420px] rounded-[2rem] object-cover sm:h-[520px] lg:h-[560px]"
              />

              <div className="grid grid-cols-2 gap-4">
                <Photo
                  name="DSC_5212"
                  className="h-44 rounded-3xl object-cover sm:h-60"
                />

                <Photo
                  name="DSC_5269"
                  className="h-44 rounded-3xl object-cover sm:h-60"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[2rem] border border-[#d7b56d]/50 bg-white/70 p-6 shadow-sm sm:p-8 lg:p-10">
              <p className="text-base leading-8 text-[#4d321c] sm:text-lg sm:leading-9">
                Arya B. Bhavsar is fifteen years old and has been preparing for
                this moment for a decade. She began her Kathak training at the
                age of five under the guidance of Guru Ruchi Lamba at the Indian
                Dance Training Center, where she developed a deep appreciation
                for the discipline, artistry, and tradition of Kathak. Over the
                years, what began as a childhood passion has grown into a
                lifelong commitment to one of India&apos;s most celebrated
                classical dance forms.
              </p>

              <p className="mt-5 text-base leading-8 text-[#4d321c] sm:text-lg sm:leading-9">
                Through years of dedicated training, Arya has studied intricate
                footwork, graceful spins, expressive storytelling, and rhythmic
                precision while also embracing opportunities to serve as a
                leader within her school and community. Her Rangmanch Pravesh
                represents the culmination of more than ten years of
                perseverance, countless hours of practice, and the unwavering
                support of her Guru, family, teachers, and friends.
              </p>

              <p className="mt-5 text-base leading-8 text-[#4d321c] sm:text-lg sm:leading-9">
                As Arya steps onto the stage this evening, she celebrates not
                only a major milestone in her artistic journey, but also the
                beginning of a lifelong pursuit of learning, performing, and
                preserving the timeless tradition of Kathak. She is grateful for
                everyone who has encouraged and inspired her along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="artists"
        className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 md:px-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
            The People Behind the Evening
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Guru &amp; Musicians
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {artists.map(([name, bio], index) => (
              <div
                key={name}
                className={`rounded-3xl border border-[#ead8a7] bg-[#fff8ec] p-6 shadow-sm sm:p-8 ${
                  index === artists.length - 1
                    ? "md:col-span-2 md:mx-auto md:max-w-3xl"
                    : ""
                }`}
              >
                <h3 className="font-serif text-2xl text-[#8a5c12] sm:text-3xl">
                  {name}
                </h3>

                <p className="mt-4 leading-8 text-[#4d321c]">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d7b56d]/60 bg-white/70 p-6 shadow-sm sm:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
            Schedule at a Glance
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            The Evening
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Opening", "Vandanas and blessings"],
              ["Performance", "Classical Kathak and special dedications"],
              ["Celebration", "Speeches, gifts, dinner, and pictures"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-[#fff8ec] p-5">
                <h3 className="font-serif text-2xl text-[#8a5c12]">
                  {title}
                </h3>

                <p className="mt-2 leading-7 text-[#5a3b20]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="program"
        className="scroll-mt-28 px-5 pb-16 sm:px-8 md:px-16 md:pb-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b8860b] sm:text-sm">
            Evening Program
          </p>

          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Program Outline
          </h2>

          <div className="mt-10 grid gap-5">
            {program.map(([title, meta], index) => (
              <div
                key={title}
                className="rounded-3xl border border-[#d7b56d] bg-white/70 p-6 shadow-sm sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm text-[#b8860b]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 font-serif text-2xl text-[#8a5c12] sm:text-3xl">
                      {title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm font-medium text-[#b8860b] sm:text-right sm:text-base">
                    {meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#2a1608] p-8 text-center text-white">
            <h3 className="font-serif text-3xl">
              Please stay after the program
            </h3>

            <p className="mt-3 leading-8 text-white/75">
              Guests are warmly invited to stay for dinner, pictures, and
              celebration.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#2a1608] px-5 py-10 text-center text-white">
        <p className="font-serif text-2xl">Arya&apos;s Rangmanch</p>

        <p className="mt-2 text-sm text-white/60 sm:text-base">
          July 11th, 2026 • Lake Forest Performing Arts Theater
        </p>
      </footer>
    </main>
  );
}