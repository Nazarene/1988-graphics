/* =========================================================
   1988 Graphics — Portfolio Data
   =========================================================

   HOW TO ADD A PROJECT
   ─────────────────────
   Copy one project object, add it to the PROJECTS array.
   Order here = order on the site.

   FIELDS:
     id       — unique slug, no spaces
     title    — displayed on hover and in the project viewer
     category — category shown in the filters
     desc     — optional short description. Leave "" to show none.
     thumb    — image shown in the grid
     images   — all images shown in the project viewer (thumb first;
                add more paths for variant/detail images)
     size     — grid column hint:
                  sm  = narrow portrait
                  md  = medium / square
                  lg  = wide landscape
                  xl  = full-width feature

   IMAGE PATHS:
     Place files in assets/work/ and reference as:
     "assets/work/your-filename.jpg"

   ========================================================= */

const PROJECTS = [

  {
    id:       'burning-eyes-poster',
    title:    'Burning Eyes',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Burning-Eyes-Poster.jpg',
    images:   ['assets/work/Burning-Eyes-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'dont-skip-the-dentist-poster',
    title:    "Don't Skip the Dentist",
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Dont-Skip-The-Dentist-Poster.jpg',
    images:   ['assets/work/Dont-Skip-The-Dentist-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'heart-grenade-poster',
    title:    'Heart Grenade',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Heart-Grenade-Poster.jpg',
    images:   ['assets/work/Heart-Grenade-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'mental-health-poster',
    title:    'Mental Health',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Mental-Health-Poster.jpg',
    images:   ['assets/work/Mental-Health-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'malcolm-in-the-middle-punk-poster',
    title:    'Malcolm in the Middle',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Malcolm-In-The-Middle-Punk-Poster.jpg',
    images:   [
      'assets/work/Malcolm-In-The-Middle-Punk-Poster.jpg',
      'assets/work/Malcolm-In-The-Middle-Punk-Poster-Red.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'nailed-hands',
    title:    'Nailed Hands',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Nailed-Hands.jpg',
    images:   ['assets/work/Nailed-Hands.jpg'],
    size:     'sm'
  },

  {
    id:       'heart-ache-poster',
    title:    'Heart Ache',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Heart-Ache-Poster.jpg',
    images:   [
      'assets/work/Heart-Ache-Poster.jpg',
      'assets/work/Heart-Ache-Poster-Inverted.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'tinnitus-awareness-poster',
    title:    'Tinnitus Awareness',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Tinnitus-Awareness-Poster.jpg',
    images:   ['assets/work/Tinnitus-Awareness-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'roomys-kind-poster',
    title:    "Roomy's Kind",
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Roomys-Kind-Poster.jpg',
    images:   [
      'assets/work/Roomys-Kind-Poster.jpg',
      'assets/work/Roomys-Kind-Poster-Blue.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'bmx-poster',
    title:    'BMX',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/BMX-Poster.jpg',
    images:   ['assets/work/BMX-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'gnarly-skate-poster',
    title:    'Gnarly Skate',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Gnarly-Skate-Poster.jpg',
    images:   ['assets/work/Gnarly-Skate-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'japanese-drifting-poster',
    title:    'Japanese Drifting',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Japanese-Drifting-Poster.jpg',
    images:   ['assets/work/Japanese-Drifting-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'overthinking-poster',
    title:    'Overthinking',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Overthinking-Poster.jpg',
    images:   ['assets/work/Overthinking-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'rodney-mullen-skate-poster',
    title:    'Rodney Mullen',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Rodney-Mullen-Skate-Poster.jpg',
    images:   ['assets/work/Rodney-Mullen-Skate-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'satan-is-a-liar-poster',
    title:    'Satan Is a Liar',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Satan-Is-a-Liar-Poster.jpg',
    images:   ['assets/work/Satan-Is-a-Liar-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'social-media-slaves-poster',
    title:    'Social Media Slaves',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Social-Media-Slaves-Poster.jpg',
    images:   ['assets/work/Social-Media-Slaves-Poster.jpg'],
    size:     'sm'
  },

  {
    id:       'crucified-skateboard-graphics',
    title:    'Crucified Skateboard Graphics',
    category: 'Graphics',
    desc:     '',
    thumb:    'assets/work/Crucified-Skateboad-Graphics.jpg',
    images:   ['assets/work/Crucified-Skateboad-Graphics.jpg'],
    size:     'sm'
  },

  /* ─────────────────────────────────────────────────────────
     NEW WORK
     Images with the same project name are grouped together.
     Square work is intentionally kept at the very end.
     ───────────────────────────────────────────────────────── */

  {
    id:       'ascii-flowers',
    title:    'ASCII Flowers',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/ASCII Flowers-Posters.jpg',
    images:   ['assets/work/ASCII Flowers-Posters.jpg'],
    size:     'sm'
  },

  {
    id:       'abortion-is-murder',
    title:    'Abortion Is Murder',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Abortion Is Murder-Posters.jpg',
    images:   ['assets/work/Abortion Is Murder-Posters.jpg'],
    size:     'sm'
  },

  {
    id:       'anti-ai-art-fingerboard',
    title:    'Anti AI Art Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Anti AI Art Fingerboard graphic-Graphic Design.jpg',
    images:   ['assets/work/Anti AI Art Fingerboard graphic-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'anti-satan-fingerboard',
    title:    'Anti Satan Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Anti Satan Fingerboard Graphic-Graphic Design.jpg',
    images:   ['assets/work/Anti Satan Fingerboard Graphic-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'bad-religion-vector-logo',
    title:    'Bad Religion Vector Logo',
    category: 'Vector Graphics',
    desc:     '',
    thumb:    'assets/work/Bad Religion Vector Logo-Vector Graphics.jpg',
    images:   ['assets/work/Bad Religion Vector Logo-Vector Graphics.jpg'],
    size:     'sm'
  },

  {
    id:       'banana-apple-carrot-core-graphics',
    title:    'Banana Apple Carrot Core Graphics',
    category: 'Vector Graphics',
    desc:     '',
    thumb:    'assets/work/Banana Apple Carrot Core Graphics-Vector Graphics.jpg',
    images:   [
      'assets/work/Banana Apple Carrot Core Graphics-Vector Graphics.jpg',
      'assets/work/Banana Apple Carrot Core Graphics-Vector Graphics 2.jpg',
      'assets/work/Banana Apple Carrot Core Graphics-Vector Graphics 3.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'eternal-life-fingerboard',
    title:    'Eternal Life Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Eternal Life Fingerboard Graphic-Graphic Design.jpg',
    images:   ['assets/work/Eternal Life Fingerboard Graphic-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'fingerboard-graphic-design-teaktuning',
    title:    'Fingerboard Graphic Design for TEAKtuning',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Fingerboard Graphic Design for TEAKtuning-Graphic Design.jpg',
    images:   [
      'assets/work/Fingerboard Graphic Design for TEAKtuning-Graphic Design.jpg',
      'assets/work/Fingerboard Graphic Design for TEAKtuning-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'fingerboard-graphic-design',
    title:    'Fingerboard Graphic Design',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Fingerboard Graphic Design-Graphic Design.jpg',
    images:   ['assets/work/Fingerboard Graphic Design-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'fingerboard-graphic-fresh-baked',
    title:    'Fingerboard Graphic — Fresh Baked Fingerboards',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Fingerboard Graphic Fresh Baked Fingerboards Graphic-Design.jpg',
    images:   ['assets/work/Fingerboard Graphic Fresh Baked Fingerboards Graphic-Design.jpg'],
    size:     'sm'
  },

  {
    id:       'fingerboard-hardware',
    title:    'Fingerboard Hardware',
    category: 'Vector Graphics',
    desc:     '',
    thumb:    'assets/work/Fingerboard Hardware-Vector Graphics.jpg',
    images:   ['assets/work/Fingerboard Hardware-Vector Graphics.jpg'],
    size:     'sm'
  },

  {
    id:       'gnarly-fingerboard-graphic',
    title:    'Gnarly Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Gnarly-Fingerboard-Graphic-Graphic Design.jpg',
    images:   [
      'assets/work/Gnarly-Fingerboard-Graphic-Graphic Design.jpg',
      'assets/work/Gnarly Fingerboard Graphic-Graphic design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'goliath-graphic',
    title:    'Goliath Graphic',
    category: 'Print Design',
    desc:     '',
    thumb:    'assets/work/Goliath Graphic-Print Design.jpg',
    images:   [
      'assets/work/Goliath Graphic-Print Design.jpg',
      'assets/work/Goliath Graphic-Print Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'grind-fingerboard-graphic',
    title:    'Grind Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Grind-Fingerboard-Graphic-Graphic Design.jpg',
    images:   [
      'assets/work/Grind-Fingerboard-Graphic-Graphic Design.jpg',
      'assets/work/Grind Fingerboard Graphic-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'i-cut-you-fingerboard-graphic',
    title:    'I Cut You Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/I-Cut-You-Fingerboard-Graphic-Graphic Design.jpg',
    images:   [
      'assets/work/I-Cut-You-Fingerboard-Graphic-Graphic Design.jpg',
      'assets/work/I Cut You Fingerboard Graphic-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'ichthys-fingerboard-graphic',
    title:    'Ichthys Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Ichthys Fingerboard Graphic-Graphic Design.jpg',
    images:   ['assets/work/Ichthys Fingerboard Graphic-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'leefai-fingerboard-graphic-banana-boi',
    title:    'Leefai Fingerboard Graphic — Banana Boi',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Leefai Fingerboard Graphic Banana Boi-Graphic design.jpg',
    images:   ['assets/work/Leefai Fingerboard Graphic Banana Boi-Graphic design.jpg'],
    size:     'sm'
  },

  {
    id:       'leefai-fingerboard-logo-design',
    title:    'Leefai Fingerboard Logo Design',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Leefai Fingerboard Logo design-Graphic Design.jpg',
    images:   [
      'assets/work/Leefai Fingerboard Logo design-Graphic Design.jpg',
      'assets/work/Leefai Fingerboard Logo design-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'nuke-fingerboard-graphic',
    title:    'Nuke Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Nuke Fingerboard Graphic-Graphic Design.jpg',
    images:   ['assets/work/Nuke Fingerboard Graphic-Graphic Design.jpg'],
    size:     'sm'
  },

  {
    id:       'saved-by-grace-fingerboard-graphics',
    title:    'Saved By Grace Fingerboard Graphics',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Saved By Grace Fingerboard Graphics-Graphic Design.jpg',
    images:   [
      'assets/work/Saved By Grace Fingerboard Graphics-Graphic Design.jpg',
      'assets/work/Saved By Grace Fingerboard Graphics-Graphic Design 2.jpg',
      'assets/work/Saved By Grace Fingerboard Graphics-Graphic Design 3.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'shred-fingerboard-graphic',
    title:    'Shred Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Shred-Fingerboard-Graphic-Graphic Design.jpg',
    images:   [
      'assets/work/Shred-Fingerboard-Graphic-Graphic Design.jpg',
      'assets/work/Shred Fingerboard Graphic-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'signature-fingerboard-graphic-fresh-baked',
    title:    'Signature Fingerboard Graphic — Fresh Baked Fingerboards',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Signature Fingerboard Graphic-Fresh Baked Fingerboards-Graphic Design.jpg',
    images:   [
      'assets/work/Signature Fingerboard Graphic-Fresh Baked Fingerboards-Graphic Design.jpg',
      'assets/work/Signature Fingerboard Graphic Fresh Baked Fingerboards-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'straight-edge',
    title:    'Straight Edge',
    category: 'Posters',
    desc:     '',
    thumb:    'assets/work/Straight Edge-Posters.jpg',
    images:   [
      'assets/work/Straight Edge-Posters.jpg',
      'assets/work/Straight Edge-Posters 2.jpg'
    ],
    size:     'sm'
  },

  {
    id:       'synthwave-fingerboard-graphic',
    title:    'Synthwave Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Synthwave Fingerboard Graphic-Graphic design.jpg',
    images:   ['assets/work/Synthwave Fingerboard Graphic-Graphic design.jpg'],
    size:     'sm'
  },

  {
    id:       'the-eye-is-the-lamp-of-the-body',
    title:    'The Eye Is The Lamp Of The Body',
    category: 'Poster Design',
    desc:     '',
    thumb:    'assets/work/The Eye Is The Lamp Of The Body-Posters.jpg',
    images:   ['assets/work/The Eye Is The Lamp Of The Body-Posters.jpg'],
    size:     'sm'
  },

  {
    id:       'things-fingerboard-graphics',
    title:    'Things Fingerboard Graphics',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Things Fingerboard Graphics-Graphic Design.jpg',
    images:   [
      'assets/work/Things Fingerboard Graphics-Graphic Design.jpg',
      'assets/work/Things Fingerboard Graphics-Graphic Design 2.jpg'
    ],
    size:     'sm'
  },

  /* Square work — kept last intentionally */
  {
    id:       'sober-minder-fingerboard-graphic',
    title:    'Sober Minder Fingerboard Graphic',
    category: 'Graphic Design',
    desc:     '',
    thumb:    'assets/work/Sober Minder Fingerboard Graphic-Graphic Design.png',
    images:   ['assets/work/Sober Minder Fingerboard Graphic-Graphic Design.png'],
    size:     'md'
  }

];
