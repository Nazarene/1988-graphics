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
     category — Posters | Branding | Print | Social | Other
     desc     — optional short description. Leave "" to show none.
     thumb    — image shown in the grid
     images   — all images shown in the project viewer (thumb first;
                add more paths for variant/detail images)
     size     — grid column hint:
                  sm  = narrow portrait  (ideal for poster artwork)
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
    id:       'Crucified-Skateboad-Graphics',
    title:    'Crucified-Skateboad-Graphics',
    category: 'Graphics',
    desc:     '',
    thumb:    'assets/work/Crucified-Skateboad-Graphics.jpg',
    images:   ['assets/work/Crucified-Skateboad-Graphics.jpg'],
    size:     'sm'
  }

];
