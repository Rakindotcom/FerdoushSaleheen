export type AudiobookTrack = {
  title: string;
  src: string;
};

export type Audiobook = {
  title: string;
  author: string;
  cover: string;
  description: string;
  tracks: AudiobookTrack[];
};

export const surahAlFatihahAudiobook: Audiobook = {
  title: "সুরা আল-ফাতিহা: সাতটি আয়াত",
  author: "ড. ফেরদৌস সালেহীন",
  cover: "/bookImage.png",
  description:
    "সুরা আল-ফাতিহার সাতটি আয়াতকে জীবন, ইবাদত, হেদায়াত ও আত্মঅনুসন্ধানের আলোকে শোনার একটি পূর্ণাঙ্গ অডিও অভিজ্ঞতা।",
  tracks: [
    {
      title: "সম্পূর্ণ অডিওবুক",
      src: "/surafatehaaudio.mp3",
    },
  ],
};
