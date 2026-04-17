export type Language = "tanglish" | "tamil";

export interface Character {
  id: string;
  name: string;
  playedBy: string;
  tagline: string;
  description: string;
  emoji: string;
}

export interface StageDirection {
  type: "stage-direction";
  text: string;
}

export interface DialogLine {
  type: "dialog";
  speaker: { tanglish: string; tamil: string };
  lines: { tanglish: string; tamil: string };
}

export interface Divider {
  type: "divider";
}

export type ScriptEntry = StageDirection | DialogLine | Divider;

export interface ScriptSection {
  id: string;
  title: { tanglish: string; tamil: string };
  blocks: ScriptEntry[];
}

export interface ProductionNote {
  heading: string;
  body: string;
}

export interface Scene {
  id: string;
  number: number | null;
  slug: string;
  title: string;
  subtitle?: string;
  duration?: string;
  synopsis?: string;
  scriptSections?: ScriptSection[];
  videoEmbedId?: string;
  productionNotes?: ProductionNote[];
  comingSoon?: boolean;
}

// ── Characters ─────────────────────────────────────────────────────────────
export const CHARACTERS: Character[] = [
  {
    id: "chakrapani",
    name: "Chakrapani",
    playedBy: "Sathya",
    tagline: "The Vain Dreamer",
    emoji: "🕶️",
    description:
      'Self-proclaimed connoisseur of beauty. Pursues a "modern" lifestyle and a second home to satisfy his vanity and playboy aspirations.',
  },
  {
    id: "chakkubai",
    name: "Chakkubai",
    playedBy: "Lata",
    tagline: "The Sharp-Witted Wife",
    emoji: "🧠",
    description:
      "Unassuming but razor-sharp. Lacks modern polish but possesses a high emotional IQ — outmanoeuvres her husband with wit, never anger.",
  },
  {
    id: "shankar",
    name: "Shankar",
    playedBy: "Shankar",
    tagline: "The Conscience",
    emoji: "⚖️",
    description:
      "Loyal friend who sees through Chakrapani's nonsense. Respects Chakkubai and acts as the reluctant mediator and moral compass.",
  },
  {
    id: "suresh",
    name: "Suresh",
    playedBy: "Suresh",
    tagline: "The All-Rounder",
    emoji: "🎭",
    description:
      "Another friend of Chakrapani and the skit's narrator. Pops in and out — but every entrance guarantees all-out entertainment.",
  },
  {
    id: "banu",
    name: "Banu",
    playedBy: "Chandrika",
    tagline: "The Dream Girl",
    emoji: "✨",
    description:
      "Sophisticated, independent school teacher and neighbour. The unwitting catalyst of Chakrapani's obsession — the Chinna Veedu he can never have.",
  },
];

// ── Scenes ─────────────────────────────────────────────────────────────────
export const SCENES: Scene[] = [
  {
    id: "overview",
    number: null,
    slug: "overview",
    title: "Overview",
    subtitle: "Characters & Story",
    synopsis: `Based on the 1985 Tamil cult classic Chinna Veedu, directed by and starring K. Bhagyaraj.
The film centres on Chakrapani — a man obsessed with his notion of ideal beauty — who feels cheated when fate gives him the wholesome but "ordinary" Chakkubai as his wife.
Drawn to his sophisticated neighbour Banu, he nurtures an obsession and dreams of a "Chinna Veedu" (separate home). Chakkubai, armed with high emotional intelligence and razor-sharp wit, outmanoeuvres him at every turn, ultimately proving that character outlasts vanity.

This skit blends Bhagyaraj's signature humour with a timeless social message: looks fade, but goodness endures.`,
  },
  {
    id: "scene-1",
    number: 1,
    slug: "scene-1",
    title: "Title Credits",
    duration: "3 min",
    synopsis:
      "The narrator Suresh introduces the skit and each character as they walk to centre stage.",
    scriptSections: [
      {
        id: "s1-intro",
        title: { tanglish: "Opening Introduction", tamil: "தொடக்க அறிமுகம்" },
        blocks: [
          {
            type: "stage-direction",
            text: "All 4 characters stand on the side of the stage. Suresh moves to the centre.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Suresh", tamil: "சுரேஷ்" },
            lines: {
              tanglish: `"Anaivarukkum Vanakkam! Inniku naanga unga munnadi kondu vara pora skit, 1985-la rasingargala kalakkuna K. Bhagyaraj-in 'Chinna Veedu' padatha adippadaya kondadhu.

Idhu namma Chakrapani-oda kadhai. Thaan romba azhaganu ninaichittu, 'modern'-ah oru manaivi kidaikkanum-nu aasai padura oru playboy ivaru. Aana vidhi yaro, ivarukku Chakkubai-nu oru nattuppura pennoda thirumanam nadakudhu. Chakkubai anbaana manasukkari-nu therinjum, avaloda thotram ivarukku pidikkala. Adhunala, pakkathu veetukku vara Banu-ngira modern teacher mela ivarukku oru 'crush' uruvaagudhu.

Kadaisila, thappu panna namma Chakrapani-ya, avaru nanban Shankar-oda udhaviyoda, Chakkubai eppadi than pudhisalithanathaala thiruthuna-ngiradhu dhaan namma skit. Bhagyaraj-oda humor-oda, azhagai vida gunam dhaan mukkiyam-nu solla pora indha skit-ah ippo paarkkalaam!"`,
              tamil: `"அனைவருக்கும் வணக்கம்! இன்னைக்கு நாங்க உங்க முன்னாடி கொண்டு வரப்போற ஸ்கிட், 1985-ல் ரசிகர்களைக் கலக்குன கே. பாக்யராஜின் 'சின்ன வீடு' படத்தை அடிப்படையாகக் கொண்டது.

இது நம்ம சக்கரபாணியோட கதை. தான் ரொம்ப அழகன்னு நினைச்சுட்டு, 'மாடர்ன்'-ஆ ஒரு மனைவி கிடைக்கணும்னு ஆசைப்படுற ஒரு பிளேபாய் இவரு. ஆனா விதி யாரோ, இவருக்கு சக்குபாய்னு ஒரு நாட்டுப்புறப் பெண்ணோட திருமணம் நடக்குது. சக்குபாய் அன்பான மனசுக்காரினு தெரிஞ்சும், அவளோட தோற்றம் இவருக்குப் பிடிக்கல. அதனால, பக்கத்து வீட்டுக்கு வர பானுங்கிற மாடர்ன் டீச்சர் மேல இவருக்கு ஒரு ஈர்ப்பு உருவாகுது.

கடைசில, தப்பு பண்ண நம்ம சக்கரபாணியை, அவரு நண்பன் சங்கரோட உதவியோட, சக்குபாய் எப்படி தன் புத்திசாலித்தனத்தால திருத்துனாங்கிறது தான் நம்ம ஸ்கிட். பாக்யராஜோட நகைச்சுவையோட, அழகை விட குணம்தான் முக்கியம்னு சொல்லப்போற இந்த ஸ்கிட்ட இப்போ பார்க்கலாம்!"`,
            },
          },
        ],
      },
      {
        id: "s1-chars",
        title: {
          tanglish: "Character Introductions",
          tamil: "கதாப்பாத்திர அறிமுகம்",
        },
        blocks: [
          {
            type: "stage-direction",
            text: "As Suresh introduces each character, they walk to the centre of the stage.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Suresh", tamil: "சுரேஷ்" },
            lines: {
              tanglish: `"Ippo namma skit-oda kathaipaathirangalai (characters) paarkkalaam!"`,
              tamil: `"இப்போ நம்ம ஸ்கிட்டோட கதைப்பாத்திரங்களைப் பார்க்கலாம்!"`,
            },
          },
          { type: "divider" },
          {
            type: "dialog",
            speaker: {
              tanglish: "Suresh → Introducing Sathya (as Chakrapani)",
              tamil: "சுரேஷ் → சத்யாவை (சக்கரபாணியாக) அறிமுகம்",
            },
            lines: {
              tanglish: `"Ivar dhaan namma kadhaiyin nayagan Chakrapani. Thannai oru 'Manmathan' nu ninaichittu, modern azhagai thedi alayum oru playboy!"`,
              tamil: `"இவர் தான் நம்ம கதையின் நாயகன் சக்கரபாணி. தன்னை ஒரு 'மன்மதன்'னு நினைச்சுட்டு, மாடர்ன் அழகைத் தேடி அலையும் ஒரு பிளேபாய்!"`,
            },
          },
          {
            type: "dialog",
            speaker: {
              tanglish: "Suresh → Introducing Chakkubai",
              tamil: "சுரேஷ் → சக்குபாயை அறிமுகம்",
            },
            lines: {
              tanglish: `"Ivar dhaan Chakkubai. Chakrapani-oda manaivi. 'Old-school' thotram dhaan, aana high-IQ intelligence-la namma hero-vukke 'check' vaikkura sharp wife!"`,
              tamil: `"இவர் தான் சக்குபாய். சக்கரபாணியோட மனைவி. 'ஓல்ட்-ஸ்கூல்' தோற்றம் தான், ஆனா ஹை-ஐக்யூ புத்திசாலித்தனத்துல நம்ம ஹீரோவுக்கே செக் வைக்கிற ஷார்ப் வைஃப்!"`,
            },
          },
          {
            type: "dialog",
            speaker: {
              tanglish: "Suresh → Introducing Shankar",
              tamil: "சுரேஷ் → சங்கரை அறிமுகம்",
            },
            lines: {
              tanglish: `"Ivar Shankar. Chakrapani-oda is a close friend. Sila nerangalil namma hero-vukku thunai... pala nerangalil avaru thappa thatti kekura 'Manasaatchi'!"`,
              tamil: `"இவர் சங்கர். சக்கரபாணியோட க்ளோஸ் பிரண்ட். சில நேரங்கள்ல நம்ம ஹீரோவுக்குத் துணை... பல நேரங்கள்ல அவரு தப்பைத் தட்டிக் கேட்கிற 'மனசாட்சி'!"`,
            },
          },
          {
            type: "dialog",
            speaker: {
              tanglish: "Suresh → Introducing Banu",
              tamil: "சுரேஷ் → பானுவை அறிமுகம்",
            },
            lines: {
              tanglish: `"Ivar dhaan Banu. Padicha, modern-ana school teacher. Chakrapani-oda kanavu kanni... aana avarukku kidaikkadha 'Chinna Veedu'!"`,
              tamil: `"இவர் தான் பானு. படிச்ச, மாடர்னான ஸ்கூல் டீச்சர். சக்கரபாணியோட கனவுக்கன்னி... ஆனா அவருக்குக் கிடைக்காத 'சின்ன வீடு'!"`,
            },
          },
          {
            type: "dialog",
            speaker: {
              tanglish: "Suresh → Introducing Himself",
              tamil: "சுரேஷ் → தன்னை அறிமுகம்",
            },
            lines: {
              tanglish: `"Ivar dhaan namma skit-oda All-rounder. Appappo vandhu povaaru... aana varum-podhu ellam 'all-out' entertainment kudupparu!"`,
              tamil: `"இவர் தான் நம்ம ஸ்கிட்டோட ஆல்-ரவுண்டர். அப்பப்போ வந்து போவாரு... ஆனா வரும்போதெல்லாம் 'ஆல்-அவுட்' என்டர்டைன்மென்ட் கொடுப்பாரு!"`,
            },
          },
        ],
      },
    ],
  },
  {
    id: "scene-2",
    number: 2,
    slug: "scene-2",
    title: "Chakrapani Pre-Marriage",
    duration: "3 min",
    synopsis:
      'Before the marriage is arranged, we see Chakrapani in his natural habitat — confident, vain, and utterly convinced that a "modern" beauty is his birthright. This scene establishes his character and sets up the comic tragedy to come.',
    videoEmbedId: "1B0mUimn2ckYtzlzYEe39J17tX2SfWwrw",
    productionNotes: [
      {
        heading: "Condensed Cast",
        body: "In the original film, Chakrapani is surrounded by a group of four friends in this scene. For the skit, this is condensed to a single companion — Shankar — who takes on all the friend dialogue, keeping the energy tight and the scene moving.",
      },
      {
        heading: "Suresh's Entrance",
        body: "The friend in the blue shirt who appears at the end of the reference video is played by Suresh in our skit. He delivers the pivotal news: Chakrapani's father has quietly gone ahead and arranged a marriage on his behalf — the moment that sets the whole story in motion.",
      },
      {
        heading: "Chakrapani Mirrors Bhagyaraj",
        body: "Sathya (as Chakrapani) will recreate the same monologue that Bhagyaraj delivers in this scene — the confident, almost theatrical speech about his impossibly high standards for a bride. The humour comes from Chakrapani delivering it with the same deadpan authority as the original, making his eventual comeuppance all the more satisfying.",
      },
    ],
  },
  {
    id: "scene-3",
    number: 3,
    slug: "scene-3",
    title: "Wedding & The Daily Grind",
    duration: "3 min",
    synopsis:
      "The wedding bells have rung — but Chakrapani's disappointment hasn't faded. We cut to married life at the dining table, where Chakkubai quietly reveals she is far more educated and capable than her husband assumed. Rather than celebrate this, Chakrapani feels threatened and doubles down on his ego, nudging her to play small so he can feel large. Chakkubai obliges — with a knowing smile.",
    productionNotes: [
      {
        heading: "Opening: Ketti Melam (Music for 30 sec)",
        body: "The scene opens with the traditional Tamil wedding percussion 'Ketti Melam' playing for 30 seconds — a festive burst that signals the wedding is done, before the music fades and the awkward domestic reality at the dining table begins.",
      },
      {
        heading: "Stage Setup",
        body: "A dining table centre-stage. Chakrapani is seated and eating. Chakkubai moves around him, serving — attentive and unhurried. Suresh, playing Chakkubai's brother, sits at the same table as a guest, his presence giving Chakkubai a quiet ally and Chakrapani an audience for his posturing.",
      },
      {
        heading: "Chakkubai's Reveal",
        body: "Through natural conversation — prompted by Suresh — it emerges that Chakkubai is highly educated and sharp. She doesn't announce it; it surfaces in how she speaks. This lands as a surprise to the audience and a threat to Chakrapani.",
      },
      {
        heading: "Chakrapani's Ego Play",
        body: "Rather than being proud of his wife's intelligence, Chakrapani feels upstaged. He steers the conversation to reassert his superiority — asking her loaded questions, expecting deference, and fishing for compliments. The comedy lies in how gracefully Chakkubai plays along while clearly being the smarter person in the room.",
      },
    ],
    videoEmbedId: "1RN_vJPAMYdE_f1-XoN_n-89W3o5j14qX",
    comingSoon: true,
  },
  {
    id: "scene-4",
    number: 4,
    slug: "scene-4",
    title: "The Neighbour",
    duration: "TBD",
    synopsis:
      "Banu, the sophisticated new neighbour, makes her first appearance — and Chakrapani is immediately smitten. What begins as a casual encounter quickly reveals the gulf between his fantasy and his reality, as Chakkubai watches with quiet, knowing patience.",
    productionNotes: [
      {
        heading: "Characters",
        body: "Chakrapani, Chakkubai, Banu (Chandrika). Shankar may appear as a witness to Chakrapani's embarrassment.",
      },
      {
        heading: "Stage Setup",
        body: "Banu is at one side of the stage, hanging clothes out to dry. Chakrapani sits in a chair on the other side, holding up a newspaper — but a small hole has been carefully torn in it, through which he sneaks glances at Banu. The audience can see exactly what he is doing; he believes no one can. Chakkubai enters from behind him carrying a coffee, clocks the situation immediately, and — without missing a beat — walks over and introduces Banu to her husband with a gracious smile. Chakrapani hastily lowers the newspaper and attempts to look like a man who was simply reading.",
      },
      {
        heading: "Key Beat",
        body: "Once introduced, Chakrapani abandons any pretence of dignity and openly flirts with Banu — right in front of Chakkubai. The comedy peaks when Chakkubai, still holding the coffee, watches her husband make a fool of himself and responds not with anger but with a composed, almost amused calm. The audience laughs at Chakrapani; they root for Chakkubai.",
      },
    ],
    scriptSections: [
      {
        id: "s4-newspaper",
        title: { tanglish: "The Newspaper Spy", tamil: "பேப்பர் ஒட்டுக்கேட்டல்" },
        blocks: [
          {
            type: "stage-direction",
            text: "Banu is on one side of the stage, hanging clothes to dry. Chakrapani sits in a chair facing the audience, newspaper raised high — a small hole torn in the centre. He peers through it, completely absorbed. Chakkubai enters quietly from behind him, carrying a coffee.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (to himself)", tamil: "சக்கரபாணி (மனதுக்குள்)" },
            lines: {
              tanglish: "Aahaa... enna thotram. Padattilendhey irangi vandha maadiri irukka. Enna azhagu, enna nadai... vidhi konjam dhayavaa irundhirundhaa—",
              tamil: "ஆஹா... என்ன தோற்றம். படத்திலிருந்தே இறங்கி வந்த மாதிரி இருக்கா. என்ன அழகு, என்ன நடை... விதி கொஞ்சம் தயவா இருந்திருந்தா—",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (placing coffee down, dryly)", tamil: "சக்குபாய் (காபி வைத்து, அமைதியாக)" },
            lines: {
              tanglish: "Kaapi.",
              tamil: "காபி.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (startled, snapping paper down)", tamil: "சக்கரபாணி (திடுக்கிட்டு, பேப்பரை இறக்கி)" },
            lines: {
              tanglish: "Enna?! Aama. Kaapi. Sari. Naan padichittu irundhein.",
              tamil: "என்ன?! ஆமா. காபி. சரி. நான் படிச்சுட்டு இருந்தேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (glancing at the hole in the paper)", tamil: "சக்குபாய் (பேப்பரில் ஓட்டையை பார்த்து)" },
            lines: {
              tanglish: "Innaiku peiperla seydhi romba... interesting-aa iruku pola.",
              tamil: "இன்னைக்கு பேப்பர்ல செய்தி ரொம்ப... இன்ட்ரஸ்டிங்ஆ இருக்கு போல.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (straightening up)", tamil: "சக்கரபாணி (நேராக உட்கார்ந்து)" },
            lines: {
              tanglish: "Romba. Niraiya current affairs. Economy. Politics. Mukkiyamaana vishayangal.",
              tamil: "ரொம்ப. நிறைய கரண்ட் அஃபேர்ஸ். எகானமி. பாலிடிக்ஸ். முக்கியமான விஷயங்கள்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (looking outside, spotting Banu)", tamil: "சக்குபாய் (வெளியே பார்த்து, பானுவை கண்டு)" },
            lines: {
              tanglish: "Pakkathu veettula pudhu neighbour vandhirukaanga. Arimugappadutthi vaikattumaa?",
              tamil: "பக்கத்து வீட்டுல புது நெய்பர் வந்திருக்காங்க. அறிமுகப்படுத்திவைக்கட்டுமா?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (feigning disinterest)", tamil: "சக்கரபாணி (ஆர்வமில்லாதது போல் நடித்து)" },
            lines: {
              tanglish: "Neighbour-aa? Naan kavanikavilley. Sari, nee solradhaala paakalaam.",
              tamil: "நெய்பரா? நான் கவனிக்கவே இல்ல. சரி, நீ சொல்றதால பாக்கலாம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (quietly, to herself)", tamil: "சக்குபாய் (மெதுவாக, மனதுக்குள்)" },
            lines: {
              tanglish: "Nischayamaa kavanikavilley.",
              tamil: "நிச்சயமா கவனிக்கல.",
            },
          },
        ],
      },
      {
        id: "s4-intro",
        title: { tanglish: "The Introduction", tamil: "அறிமுகம்" },
        blocks: [
          {
            type: "stage-direction",
            text: "Chakkubai calls out to Banu. Banu walks over warmly. Chakrapani sets the newspaper aside, adjusts himself, and transforms instantly into a man of sophistication.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai", tamil: "சக்குபாய்" },
            lines: {
              tanglish: "Banu! Vaanga vaanga. En husband-ai santhiinga.",
              tamil: "பானு! வாங்க வாங்க. என் ஹஸ்பண்டை சந்திங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (cheerfully)", tamil: "பானு (மகிழ்ச்சியாக)" },
            lines: {
              tanglish: "Hello! Neengathaan Chakkubai-yoda husband-aa?",
              tamil: "ஹலோ! நீங்கதான் சக்குபாயோட ஹஸ்பண்டா?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (rising smoothly, chest out)", tamil: "சக்கரபாணி (நிமிர்ந்து எழுந்து)" },
            lines: {
              tanglish: "Aamaam. Chakrapani. Thozhilaal engineer. Aarvatthaala kalaignan.",
              tamil: "ஆமாம். சக்கரபாணி. தொழிலால இஞ்சினியர். ஆர்வத்தால கலைஞன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (politely)", tamil: "பானு (கண்ணியமாக)" },
            lines: {
              tanglish: "Oh. Paathu sandhosham.",
              tamil: "ஓ. பாத்து சந்தோஷம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani", tamil: "சக்கரபாணி" },
            lines: {
              tanglish: "Ennoda pakkam makizhchi. Neengal teacher maadiri teriyudhu. Andha puddhisaali thotram iruku.",
              tamil: "என்னோட பக்கம் மகிழ்ச்சி. நீங்க டீச்சர் மாதிரி தெரியுது. அந்த புத்திசாலி தோற்றம் இருக்கு.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (surprised)", tamil: "பானு (ஆச்சரியமாக)" },
            lines: {
              tanglish: "Aama, unmaiyileye! Eppadi theriyum?",
              tamil: "ஆமா, உண்மையிலேயே! எப்படி தெரியும்?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (tapping his temple)", tamil: "சக்கரபாணி (நெற்றியை தட்டி)" },
            lines: {
              tanglish: "Naan aatkalai padippein. Adhu ennoda gift. Sila aambalainga peiper padippaanga. Naan manithargalai padippein.",
              tamil: "நான் ஆட்களை படிப்பேன். அது என்னோட கிஃப்ட். சில ஆம்பிளுங்க பேப்பர் படிப்பாங்க. நான் மனிதர்களை படிப்பேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (softly)", tamil: "சக்குபாய் (அமைதியாக)" },
            lines: {
              tanglish: "Konja nerathukku munnaadi peipperai romba kavanama padichittu irundhaar.",
              tamil: "கொஞ்ச நேரத்துக்கு முன்னாடி பேப்பரை ரொம்ப கவனமா படிச்சுட்டு இருந்தாரு.",
            },
          },
        ],
      },
      {
        id: "s4-flirt",
        title: { tanglish: "Chakrapani in Full Flow", tamil: "சக்கரபாணியின் பேச்சு வெள்ளம்" },
        blocks: [
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (ignoring Chakkubai)", tamil: "சக்கரபாணி (சக்குபாயை புறக்கணித்து)" },
            lines: {
              tanglish: "Enna subject padippikireenga, Banu?",
              tamil: "என்ன சப்ஜெக்ட் படிப்பிக்கிறீங்க, பானு?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu", tamil: "பானு" },
            lines: {
              tanglish: "Maths.",
              tamil: "மேத்ஸ்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (beaming)", tamil: "சக்கரபாணி (கண்கள் மலர்ந்து)" },
            lines: {
              tanglish: "Maths! Arumai. Naaanum maths-la romba exceptional-aa iruppen.",
              tamil: "மேத்ஸ்! அருமை. நானும் மேத்ஸ்ல ரொம்ப எக்ஸெப்ஷனலா இருப்பேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (casually)", tamil: "சக்குபாய் (சாதாரணமாக)" },
            lines: {
              tanglish: "Kadandha vaaram oru varushatthula enna naalnu ennakitta ketteenga.",
              tamil: "கடந்த வாரம் ஒரு வருஷத்துல எத்தனை நாள்னு என்கிட்ட கேட்டீங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (smoothly)", tamil: "சக்கரபாணி (சட்டென்று)" },
            lines: {
              tanglish: "Adhu... naan unnai test panninen. Advanced maths — basic illai.",
              tamil: "நான் உன்னை டெஸ்ட் பண்ணினேன். அட்வான்ஸ்ட் மேத்ஸ் — பேசிக் இல்ல.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (stifling a smile)", tamil: "பானு (சிரிப்பை அடக்கி)" },
            lines: {
              tanglish: "Appadi-yaa.",
              tamil: "அப்படியா.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (leaning forward, charming)", tamil: "சக்கரபாணி (முன்னோக்கி சாய்ந்து)" },
            lines: {
              tanglish: "Banu — Banu-nu koopidalaama? Namakku yedho oru wavelength match aagudhu maadiri teriyudhu. Randu puddhisaaligal, tharseiyalaa santhikkirom.",
              tamil: "பானு — பானுன்னு கூப்பிடலாமா? நமக்கு ஏதோ ஒரு வேவ்லெங்த் மேட்ச் ஆகுது மாதிரி தெரியுது. ரெண்டு புத்திசாலிங்க, தற்செயலா சந்திக்கிறோம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (gently)", tamil: "சக்குபாய் (மெதுவாக)" },
            lines: {
              tanglish: "Kaapi aarudhu.",
              tamil: "காபி ஆறிடுது.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (waving her off)", tamil: "சக்கரபாணி (கை அசைத்து)" },
            lines: {
              tanglish: "Aama aama. Banu, classical music pidikkumaa? Kavithai? Ennoda taste romba refined.",
              tamil: "ஆமா ஆமா. பானு, கிளாசிக்கல் மியூஸிக் பிடிக்குமா? கவிதை? என்னோட டேஸ்ட் ரொம்ப ரிஃபைண்டு.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (edging away politely)", tamil: "பானு (கண்ணியமாக விலகி)" },
            lines: {
              tanglish: "Nalladhaan iruku. Naan ullae poganum—",
              tamil: "நல்லாதான் இருக்கு. நான் உள்ளே போகணும்—",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani", tamil: "சக்கரபாணி" },
            lines: {
              tanglish: "Illai illai, irunga! Ungalai patthi innum sollunga. Ungaloda caliber—",
              tamil: "இல்ல இல்ல, இருங்க! உங்களைப் பத்தி இன்னும் சொல்லுங்க. உங்களோட கேலிபர்—",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (warmly, to Banu)", tamil: "சக்குபாய் (பானுவிடம் அன்பாக)" },
            lines: {
              tanglish: "Paravaayillai. Padichavangalai paathaa ivarukku ursaagam varudhu. Ivaroda koottathula adhu konjam rare.",
              tamil: "பரவாயில்ல. படிச்சவங்களை பாத்தா இவருக்கு உற்சாகம் வருது. இவரோட கூட்டத்துல அது கொஞ்சம் ரேர்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (stiffening)", tamil: "சக்கரபாணி (முகம் இறுகி)" },
            lines: {
              tanglish: "Adhu enna artham?",
              tamil: "அது என்ன அர்த்தம்?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (smiling innocently)", tamil: "சக்குபாய் (அப்பாவியாக சிரித்து)" },
            lines: {
              tanglish: "Onnum illai. Neengal intelligence-ai appreciate pannreenga. Piraridam.",
              tamil: "ஒண்ணும் இல்ல. நீங்க இன்டெலிஜென்ஸை அப்ரிஷியேட் பண்றீங்க. பிறரிடம்.",
            },
          },
        ],
      },
      {
        id: "s4-exit",
        title: { tanglish: "Banu Exits — Chakkubai Has the Last Word", tamil: "பானு போகிறாள் — கடைசி வார்த்தை சக்குபாயிடம்" },
        blocks: [
          {
            type: "stage-direction",
            text: "Banu, thoroughly entertained but gracefully composed, begins to leave. Chakkubai sips the coffee Chakrapani never touched.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (warmly)", tamil: "பானு (அன்பாக)" },
            lines: {
              tanglish: "Randu peireyum paathu sandhosham. Bye!",
              tamil: "ரெண்டு பேரையும் பாத்து சந்தோஷம். பாய்!",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (gazing after her, dreamily)", tamil: "சக்கரபாணி (கனவுலகில்)" },
            lines: {
              tanglish: "Enna ponnu...",
              tamil: "என்ன பொண்ணு...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (picking up the cold coffee)", tamil: "சக்குபாய் (ஆறிய காபியை எடுத்து)" },
            lines: {
              tanglish: "Aama. Nalla ponnuthan.",
              tamil: "ஆமா. நல்ல பொண்ணுதான்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (turning, suddenly defensive)", tamil: "சக்கரபாணி (திரும்பி, தற்காத்துக்கொண்டு)" },
            lines: {
              tanglish: "Naan friendly-aa irundhein, avvaLodhan. Adhukku peyar social grace. Ennoda caliber-oda aambalaiku neighbours-kitta nallaa irukkaNum.",
              tamil: "நான் ஃப்ரெண்ட்லியா இருந்தேன், அவ்ளோதான். அதுக்கு பேரு சோஷியல் கிரேஸ். என்னோட கேலிபரோட ஆம்பிளுக்கு நெய்பர்ஸ்கிட்ட நல்லா இருக்கணும்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (nodding)", tamil: "சக்குபாய் (தலை அசைத்து)" },
            lines: {
              tanglish: "Mmm.",
              tamil: "ம்ம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (pointedly)", tamil: "சக்கரபாணி (நேரடியாக)" },
            lines: {
              tanglish: "Aval-kitriyirundu neeYum kathukalaam, theriyumaa.",
              tamil: "அவளுக்கிட்டயிருந்து நீயும் கத்துக்கலாம், தெரியுமா.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (eyes twinkling, taking a slow sip)", tamil: "சக்குபாய் (கண்கள் மின்னி, மெதுவாக குடித்து)" },
            lines: {
              tanglish: "Nischayamaa. Ava maths-la romba nallaa irukaanga maadiri.",
              tamil: "நிச்சயமா. அவ மேத்ஸ்ல ரொம்ப நல்லா இருக்காங்க மாதிரி.",
            },
          },
          {
            type: "stage-direction",
            text: "Chakrapani opens his mouth to respond. Thinks better of it. Picks up the newspaper. Holds it up — then realises the hole is still there. Slowly lowers it. Blackout.",
          },
        ],
      },
    ],
  },
  {
    id: "scene-5",
    number: 5,
    slug: "scene-5",
    title: "The Dream Sequence",
    duration: "3 min",
    synopsis:
      "We step inside Chakrapani's head. The lights shift, the world goes soft, and Banu appears — transformed into the woman of his fantasies, dancing just for him. But his conscience, played by Shankar, refuses to leave him in peace. He hovers at the edge of the dream, humming, tutting, and gently pricking the illusion — reminding Chakrapani of everything he is choosing to ignore.",
    videoEmbedId: "1DEef4RX2VMP43LgXPlrg4-LgvZV_2CFY",
    productionNotes: [
      {
        heading: "Dream Lighting",
        body: "The stage dims to a warm, hazy glow — a clear visual cue that we have left reality. Banu enters in dance costume and performs to the song. Chakrapani watches from a dreamy chair or plinth, completely entranced.",
      },
      {
        heading: "Shankar as Manasaatchi (Conscience)",
        body: "Shankar enters from the side — not as a character in the dream, but as Chakrapani's conscience made visible. He wears something slightly absurd to mark him as an inner voice (a sash, a halo, a clipboard). He hums 'thatharina...' between his lines, as if he is the background score of Chakrapani's own guilt.",
      },
      {
        heading: "The Humming",
        body: "Shankar's 'thatharina...' hum is both musical and mocking. He hums when Chakrapani is lost in the fantasy, abruptly interrupting the mood. Each hum gets a little louder — and Chakrapani's dream a little shakier.",
      },
      {
        heading: "Banu's Role",
        body: "Banu (Chandrika) performs the dance as the dream vision. She does not speak — her role is pure choreography. She is unaware she is in anyone's dream; that irony is entirely for the audience.",
      },
    ],
  },
  {
    id: "scene-6",
    number: 6,
    slug: "scene-6",
    title: "The Humiliation",
    duration: "3 min",
    synopsis:
      "Emboldened by his fantasy, Chakrapani finally works up the nerve to approach Banu. It goes catastrophically wrong. Banu — sharp, composed, and fully aware of his creeping obsession — dismantles him in a few precise sentences. Worse: Chakkubai witnesses every word of it. The pedestal Chakrapani built collapses in front of his own wife.",
    productionNotes: [
      {
        heading: "Stage Setup",
        body: "Banu is in the common area — perhaps hanging laundry or reading. Chakrapani saunters in trying to look casual. Shankar hovers in the background, already anticipating disaster.",
      },
      {
        heading: "Banu's Tone",
        body: "Banu is not cruel — she is simply direct. She doesn't raise her voice. Her power comes from calm, precise words that leave no room for misinterpretation. The audience should feel the comedy and the sting at the same time.",
      },
      {
        heading: "Chakkubai's Entrance",
        body: "Chakkubai enters mid-scene, just in time to hear the worst of it. She doesn't overreact — she watches quietly with a small, knowing smile. Her silence is louder than anything she could say.",
      },
      {
        heading: "Chakrapani's Exit",
        body: "He doesn't storm off — he shuffles out, completely deflated. The big dreamer undone by a single conversation. Shankar pats him on the shoulder and says nothing. Nothing needs to be said.",
      },
    ],
    scriptSections: [
      {
        id: "s6-approach",
        title: { tanglish: "The Approach", tamil: "அணுகுதல்" },
        blocks: [
          {
            type: "stage-direction",
            text: "Banu is reading near the doorway. Chakrapani enters from the side, smoothing his hair, trying to look effortlessly sophisticated. Shankar watches from a distance, shaking his head slowly.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (brightly)", tamil: "சக்கரபாணி (உற்சாகமாக)" },
            lines: {
              tanglish: "Oh — Banu, neenga irukkeenga! Romba naalaa paakkalai.",
              tamil: "ஓ — பானு, நீங்க இருக்கீங்க! ரொம்ப நாளா பார்க்கல.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (without looking up)", tamil: "பானு (பார்க்காமல்)" },
            lines: {
              tanglish: "Aamaa.",
              tamil: "ஆமா.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (moving closer)", tamil: "சக்கரபாணி (நெருங்கி)" },
            lines: {
              tanglish: "Neenga padikareenga-vaa? Enna padam?",
              tamil: "நீங்க படிக்கிறீங்க-வா? என்ன படம்?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (coolly)", tamil: "பானு (நிதானமாக)" },
            lines: {
              tanglish: "Padikaathavanga pesaadha maadiri solra padam.",
              tamil: "படிக்காதவங்க பேசாத மாதிரி சொல்ற படம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (under his breath)", tamil: "சங்கர் (மெதுவாக)" },
            lines: {
              tanglish: "Da... tiriambu da...",
              tamil: "டா... திரும்பு டா...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (ignoring Shankar, laughing it off)", tamil: "சக்கரபாணி (சங்கரை புறக்கணித்து, சிரித்து)" },
            lines: {
              tanglish: "Aiyo, naan serious-aa kekkavillai. Naan eppavum nenchukarom neenga eppadi irukkeenga-nu.",
              tamil: "ஐயோ, நான் சீரியஸ்-ஆ கேக்கல. நான் எப்பவும் நெஞ்சுகாறோம் நீங்க எப்படி இருக்கீங்கன்னு.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (finally looking up, directly)", tamil: "பானு (கடைசியில் நேரடியாக பார்த்து)" },
            lines: {
              tanglish: "Neenga ennoda kavalai padaama, ungaloda veetla irukkaangaley — avangoda kavalai paddunga.",
              tamil: "நீங்க என்னோட கவலை படாம, உங்களோட வீட்ல இருக்காங்களே — அவங்கோட கவலை படுங்க.",
            },
          },
        ],
      },
      {
        id: "s6-dismantled",
        title: { tanglish: "The Dismantling", tamil: "சிதைவு" },
        blocks: [
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (stung but pressing on)", tamil: "சக்கரபாணி (வலித்தும் தொடர்ந்து)" },
            lines: {
              tanglish: "Naan... ungaley romba respect panraen. Neenga romba different-aa irukeenga.",
              tamil: "நான்... உங்களே ரொம்ப ரெஸ்பெக்ட் பண்றேன். நீங்க ரொம்ப டிஃபரண்ட்-ஆ இருக்கீங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (putting the book down)", tamil: "பானு (புத்தகத்தை வச்சு)" },
            lines: {
              tanglish: "Naan theriyum. Neenga ennai newspaper-la thuvaara pottu paakkireenga-nu.",
              tamil: "நான் தெரியும். நீங்க என்னை நியூஸ்பேப்பர்ல துவாரா போட்டு பாக்கிறீங்கன்னு.",
            },
          },
          {
            type: "stage-direction",
            text: "Chakrapani freezes. Shankar covers his face with his hand.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (stammering)", tamil: "சக்கரபாணி (தடுமாறி)" },
            lines: {
              tanglish: "Adhu... adhu... naan news padichukittirundhen, accidentally—",
              tamil: "அது... அது... நான் நியூஸ் படிச்சிட்டிருந்தேன், accidentally—",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (calmly)", tamil: "பானு (நிதானமாக)" },
            lines: {
              tanglish: "Oru vaaram newspaper-la oru page maari poadama oru tuvaaram irundhadhu. Naan count pannittaen.",
              tamil: "ஒரு வாரம் நியூஸ்பேப்பர்ல ஒரு பக்கம் மாறி போடாம ஒரு துவாரம் இருந்தது. நான் count பண்ணிட்டேன்.",
            },
          },
          {
            type: "stage-direction",
            text: "From the doorway, Chakkubai quietly enters. She stops when she hears. She does not announce herself.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Banu (standing, measured)", tamil: "பானு (எழுந்து, அளவாக)" },
            lines: {
              tanglish: "Ungalukku enna venum-nu theriyaadhu. Enna veendum-nu theriyum. Rendu-um onnu illai. En paeru vazhakkaama vaazhunga — unakku-m, avar kittayum nalla irukkum.",
              tamil: "உங்களுக்கு என்ன வேணும்னு தெரியாது. என்ன வேண்டும்னு தெரியும். ரெண்டும் ஒண்ணு இல்லை. என் பேரு வழக்காம வாழுங்க — உனக்கும், அவர் கிட்டயும் நல்லா இருக்கும்.",
            },
          },
          {
            type: "stage-direction",
            text: "Banu picks up her book and goes inside without another word.",
          },
        ],
      },
      {
        id: "s6-aftermath",
        title: { tanglish: "The Aftermath", tamil: "பின்விளைவு" },
        blocks: [
          {
            type: "stage-direction",
            text: "Chakrapani stands still, completely hollowed out. He slowly turns and sees Chakkubai standing there. Their eyes meet.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (quietly, no mockery)", tamil: "சக்குபாய் (அமைதியாக, கேலியில்லாம)" },
            lines: {
              tanglish: "Naan kaapikaaga vandhaen.",
              tamil: "நான் காபிக்காக வந்தேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (barely audible)", tamil: "சக்கரபாணி (கேட்கவே கேட்காமல்)" },
            lines: {
              tanglish: "Seri.",
              tamil: "சரி.",
            },
          },
          {
            type: "stage-direction",
            text: "Chakkubai goes inside. Shankar walks up to Chakrapani and puts a hand on his shoulder. He says nothing. They both stand there in silence.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (to himself)", tamil: "சக்கரபாணி (மனதுக்குள்)" },
            lines: {
              tanglish: "Eppadipatta aalu naan...",
              tamil: "எப்படிப்பட்ட ஆளு நான்...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (gently)", tamil: "சங்கர் (மெதுவாக)" },
            lines: {
              tanglish: "Adhai purinjukittaey-nu nenaichaal — adhu dhaan maaththam.",
              tamil: "அதை புரிஞ்சுக்கிட்டேய்னு நினைச்சால் — அதுதான் மாத்தம்.",
            },
          },
          {
            type: "stage-direction",
            text: "Lights dim. End of Scene 6.",
          },
        ],
      },
    ],
  },
  {
    id: "scene-7",
    number: 7,
    slug: "scene-7",
    title: "Forgiveness",
    duration: "3 min",
    synopsis:
      "The comedy gives way to something warmer. Shankar, tired of watching his friend make a fool of himself, sits Chakrapani down and holds up a mirror — not with anger, but with the quiet honesty only a true friend can offer. Slowly, reluctantly, and then genuinely, Chakrapani sees himself clearly for the first time. He goes to Chakkubai — not with excuses, but with a simple, honest apology. She accepts it the same way she has handled everything else: with grace, warmth, and just a little wit.",
    productionNotes: [
      {
        heading: "Stage Setup",
        body: "Opens with Shankar and Chakrapani alone on stage — two chairs, a simple setting. When Chakrapani goes to Chakkubai, she enters from the side. The whole cast takes a final bow together at the close.",
      },
      {
        heading: "Tone",
        body: "This scene is warm, not heavy. The humour does not disappear — Chakkubai's last line should get a laugh — but the emotional resolution is genuine. Chakrapani's change of heart must feel earned, not sudden.",
      },
    ],
    scriptSections: [
      {
        id: "s6-shankar-speaks",
        title: { tanglish: "Shankar Holds Up the Mirror", tamil: "சங்கர் கண்ணாடி காட்டுகிறான்" },
        blocks: [
          {
            type: "stage-direction",
            text: "Chakrapani sits alone, lost in thought. Shankar enters, pulls up a chair, and sits beside him — not opposite, but beside. He does not rush.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar", tamil: "சங்கர்" },
            lines: {
              tanglish: "Chakra... oru kelviya kekkattumaa?",
              tamil: "சக்ரா... ஒரு கேள்வியா கேக்கட்டுமா?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (flatly)", tamil: "சக்கரபாணி (வெறுமையாக)" },
            lines: {
              tanglish: "Kelu.",
              tamil: "கேளு.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar", tamil: "சங்கர்" },
            lines: {
              tanglish: "Unakku yaar romba nallaa seidhirukkaainga — uyiroda Chakkubai-yaa, illai kanavu-la mattum varum Banu-vaa?",
              tamil: "உனக்கு யார் ரொம்ப நல்லா செஞ்சிருக்காங்க — உயிரோட சக்குபாய்யா, இல்லை கனவுல மட்டும் வர பானுவா?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (shifting uncomfortably)", tamil: "சக்கரபாணி (அசௌகரியமாக)" },
            lines: {
              tanglish: "Adhu... rendu-um veruvaeru vishayam.",
              tamil: "அது... ரெண்டும் வேறு வேற விஷயம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (quietly)", tamil: "சங்கர் (அமைதியாக)" },
            lines: {
              tanglish: "Aamaa. Oru vishayam unakku kanavaa maatum varudhu. Innoru vishayam kaalaila kaapi thayaar pannitu, neeyum theriyaadhavan maadiri irukkumbodhu, vaayai moodikittu ulla poidhirukkaanga.",
              tamil: "ஆமா. ஒரு விஷயம் உனக்கு கனவா மட்டும் வருது. இன்னொரு விஷயம் காலைல காபி தயார் பண்ணிட்டு, நீயும் தெரியாதவன் மாதிரி இருக்கும்போது, வாயை மூடிக்கிட்டு உள்ளே போயிடுறாங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (no answer)", tamil: "சக்கரபாணி (பதில் இல்லாமல்)" },
            lines: {
              tanglish: "...",
              tamil: "...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar", tamil: "சங்கர்" },
            lines: {
              tanglish: "Nee enna thedhiney Chakra? Azhagu-vaa? Azhagu madum-aa nee vaazhaporei?",
              tamil: "நீ என்ன தேடினே சக்ரா? அழகுவா? அழகு மட்டும்தான் நீ வாழப்போறே?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (quietly)", tamil: "சக்கரபாணி (மெதுவாக)" },
            lines: {
              tanglish: "Illai...",
              tamil: "இல்லை...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar", tamil: "சங்கர்" },
            lines: {
              tanglish: "Apparam yaaraalayaavathu unn vaazhkai-la kadaisi varaikkum nallaa irukkum — unna pathi nallaa pesuvaainga, unakkaaga kandippaa irupaainga, un thandhai maadiri maarum adhu Chakkubai dhaan. Adhu thedhinaa kedaikaadhu Chakra. Adhu iruppaavey iruppadhu.",
              tamil: "அப்பறம் யாரால்யாவது உன் வாழ்க்கைல கடைசி வரைக்கும் நல்லா இருக்கும் — உன்னைப் பத்தி நல்லா பேசுவாங்க, உனக்காக கண்டிப்பா இருப்பாங்க, உன் தந்தை மாதிரி மாறும் அது சக்குபாய் தான். அது தேடினா கிடைக்காது சக்ரா. அது இருப்பாவே இருப்பது.",
            },
          },
          {
            type: "stage-direction",
            text: "A long pause. Chakrapani stares at the floor. Something settles in him.",
          },
        ],
      },
      {
        id: "s6-realization",
        title: { tanglish: "The Realization", tamil: "உணர்வு விழிப்பு" },
        blocks: [
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (slowly, to himself)", tamil: "சக்கரபாணி (மெதுவாக, மனதுக்குள்)" },
            lines: {
              tanglish: "Naan romba thappu pannittein, Shankar.",
              tamil: "நான் ரொம்ப தப்பு பண்ணிட்டேன், சங்கர்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (simply)", tamil: "சங்கர் (எளிமையாக)" },
            lines: {
              tanglish: "Theriyum. Avangukku theriyumaa-nu paarunga.",
              tamil: "தெரியும். அவங்ககு தெரியுமான்னு பாருங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (standing, resolved)", tamil: "சக்கரபாணி (எழுந்து, உறுதியாக)" },
            lines: {
              tanglish: "Naan poidhu pesarei.",
              tamil: "நான் போய்துப் பேசறேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (calling after him)", tamil: "சங்கர் (பின்னால் கூப்பிட்டு)" },
            lines: {
              tanglish: "Excuse venum, explanation veendum. Rendu-um onnu illai.",
              tamil: "எக்ஸ்க்யூஸ் வேணும், எக்ஸ்பிளனேஷன் வேண்டாம். ரெண்டும் ஒண்ணு இல்லை.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (nodding, quietly)", tamil: "சக்கரபாணி (தலை அசைத்து, அமைதியாக)" },
            lines: {
              tanglish: "Theriyum.",
              tamil: "தெரியும்.",
            },
          },
        ],
      },
      {
        id: "s6-apology",
        title: { tanglish: "Chakrapani & Chakkubai — The Apology", tamil: "சக்கரபாணி & சக்குபாய் — மன்னிப்பு" },
        blocks: [
          {
            type: "stage-direction",
            text: "Chakkubai enters. She is doing something ordinary — folding a cloth, carrying a plate — unhurried as always. Chakrapani walks up to her and stops. She looks at him.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani", tamil: "சக்கரபாணி" },
            lines: {
              tanglish: "Chakkubai...",
              tamil: "சக்குபாய்...",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (waiting, no hurry)", tamil: "சக்குபாய் (காத்திருந்து, அவசரமில்லாமல்)" },
            lines: {
              tanglish: "Sollunga.",
              tamil: "சொல்லுங்க.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (struggling, then simply)", tamil: "சக்கரபாணி (தடுமாறி, பிறகு நேரடியாக)" },
            lines: {
              tanglish: "Naan... romba thappu pannittein. Unnoda nallathana pathi enna konjam kuda yosikka-liye. Azhagu thedhinein, caliber pessinein... enna pakkathule irundha oru mukkiyamaana vishayatthai paaka-villai. Maannikkanum.",
              tamil: "நான்... ரொம்ப தப்பு பண்ணிட்டேன். உன்னோட நல்லதனா பத்தி என்ன கொஞ்சம் கூட யோசிக்கல. அழகு தேடினேன், கேலிபர் பேசினேன்... என்ன பக்கத்துலே இருந்த ஒரு முக்கியமான விஷயத்தை பாக்கல்லை. மன்னிக்கணும்.",
            },
          },
          {
            type: "stage-direction",
            text: "A beat. Chakkubai looks at him for a long moment. Then she sets down what she is holding.",
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (gently)", tamil: "சக்குபாய் (மெதுவாக)" },
            lines: {
              tanglish: "Naan ennaikku-mey maannichitein.",
              tamil: "நான் என்னைக்கும்ய மன்னிச்சிட்டேன்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (surprised)", tamil: "சக்கரபாணி (ஆச்சரியமாக)" },
            lines: {
              tanglish: "Innum konjam kooda koppali-kaama?",
              tamil: "இன்னும் கொஞ்சம் கூட கோபப்படாமலா?",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (smiling)", tamil: "சக்குபாய் (சிரித்து)" },
            lines: {
              tanglish: "Neengal thappey seinjeenga-nu therinjum maannichitein. Ippo neengalum therinjeenga-nu theriyudhu. Adhu-dhaan mukkiyam.",
              tamil: "நீங்கள் தப்பே செஞ்சீங்கன்னு தெரிஞ்சும் மன்னிச்சிட்டேன். இப்போ நீங்களும் தெரிஞ்சீங்கன்னு தெரியுது. அதுதான் முக்கியம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakrapani (humbled)", tamil: "சக்கரபாணி (தாழ்மையாக)" },
            lines: {
              tanglish: "Un maadiri oru aalu enakku kidaichadhu romba adushtam.",
              tamil: "உன் மாதிரி ஒரு ஆளு எனக்கு கிடைச்சது ரொம்ப அதிஷ்டம்.",
            },
          },
          {
            type: "dialog",
            speaker: { tanglish: "Chakkubai (dryly, picking up her cloth again)", tamil: "சக்குபாய் (நகைச்சுவையாக, துணியை எடுத்து)" },
            lines: {
              tanglish: "Adhu theriya konjam neram aachhu. Sari, vaanga — kaapi aarudhu.",
              tamil: "அது தெரிய கொஞ்சம் நேரம் ஆச்சு. சரி, வாங்க — காபி ஆறுது.",
            },
          },
          {
            type: "stage-direction",
            text: "Shankar steps in from the side, watching the two of them head inside together. He looks at the audience.",
          },
        ],
      },
      {
        id: "s6-close",
        title: { tanglish: "Shankar's Closing Word", tamil: "சங்கரின் இறுதி வார்த்தை" },
        blocks: [
          {
            type: "dialog",
            speaker: { tanglish: "Shankar (to the audience)", tamil: "சங்கர் (பார்வையாளர்களிடம்)" },
            lines: {
              tanglish: "Paatheenga-laa? Azhagu varaikkum manam pogudhu. Aana vaazha vaikkuradhu gunam dhaan. Idhu Chakkubai sollavilei. Bhagyaraj sonna-dhu. Naan solradhum illai — naama ellaarum kenjam yosikkanum-nu solradhukkaaga! Vanakkam!",
              tamil: "பாத்தீங்களா? அழகு வரைக்கும் மனம் போகுது. ஆனா வாழ வைக்கிறது குணம் தான். இது சக்குபாய் சொல்லல. பாக்யராஜ் சொன்னது. நான் சொல்றதும் இல்லை — நாமா எல்லாரும் கொஞ்சம் யோசிக்கணும்னு சொல்றதுக்காக! வணக்கம்!",
            },
          },
          {
            type: "stage-direction",
            text: "Full cast enters for the final bow. Curtain.",
          },
        ],
      },
    ],
  },
];
