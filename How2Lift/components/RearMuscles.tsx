import * as React from "react"
import { Alert } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface SvgComponentProps {
    width?: number;
    height?: number;
    viewBox?: string;
    fill?: string;
    xmlns?: string;
    [key: string]: any;
  }

function RearMuscles(props: SvgComponentProps) {
  return (
<Svg
      width={661}
      height={1207}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="rear-muscles" clipPath="url(#clip0_1_2)">
        <G id="traps" onPress={() => {Alert.alert("traps")}}>
          <Path
            id="Vector"
            d="M233.69 210.53c3.21-1.97 7.59-4.66 10.69-6.06 1.99-.9 6.6-2.81 11.49-4.84 5-2.07 10.45-4.34 14.44-6.07.04 0 .07 0 .11-.02 19.55-5.27 40.39-4.24 51.58-3.69 1.19.06 2.28.11 3.24.16 3.33.14 6.72.14 10.04 0 .96-.04 2.04-.1 3.23-.16 11.2-.55 32.03-1.58 51.58 3.69.04 0 .07.02.11.02 4 1.73 9.45 4 14.45 6.07 4.89 2.03 9.5 3.94 11.49 4.84 3.08 1.4 7.48 4.09 10.69 6.06.06.04.12.08.19.11-16.13 2.35-25.59 11.71-30.85 17.43 0 0-.02.03-.02.04-.36.39-.71.77-1.03 1.12l-.53.58-.04.04c-6.7 7.33-11.8 6.41-24.14 4.2-9.02-1.62-21.37-3.83-40.14-3.83s-31.12 2.21-40.14 3.83c-12.33 2.21-17.44 3.12-24.14-4.2-.02-.02-.03-.04-.04-.04l-.52-.58c-5-5.5-14.62-16.06-31.89-18.59.05-.04.11-.08.18-.11h-.03z"
            fill="#000"
          />
        </G>
        <G id="calves" fill="#000">
          <Path
            id="Vector_2"
            d="M475.03 965.71v.08c-1.41 26.22-4.62 53.06-17.62 53.83-7.32.45-13.09-11.27-17.28-19.82-3.48-7.09-5.78-11.78-9.14-11.49-4.23.36-4.81 5.96-5.54 13.06-.9 8.78-2.02 19.7-10.11 21.38-3.17.66-12.83 2.66-21.97-20.97 0-.02 0-.04-.02-.06-2.96-9.62-3.27-22.92 1.1-64.53.81-.12 1.45-.8 1.49-1.64.39-8.56 3.78-14.95 9.32-17.55 4.9-2.3 10.93-1.39 16.12 2.44 7.63 5.62 16.5-2.93 24.34-10.47 5.12-4.93 10.91-10.52 14.28-9.61 1.49.4 2.61 2.19 3.41 4.19 0 .03.02.06.03.09.28.85.56 1.7.85 2.57 4.88 14.97 10.31 32.88 10.74 58.5z"
          />
          <Path
            id="Vector_3"
            d="M267.16 1001.72s-.02.04-.02.06c-9.13 23.64-18.78 21.64-21.97 20.97-8.09-1.68-9.21-12.61-10.11-21.38-.72-7.1-1.3-12.7-5.53-13.06-3.37-.29-5.66 4.4-9.14 11.49-4.2 8.54-9.91 20.27-17.29 19.82-12.98-.77-16.19-27.59-17.62-53.8v-.04c.42-25.66 5.86-43.61 10.75-58.58.29-.87.57-1.72.85-2.57 0-.03.02-.06.03-.09.8-1.99 1.92-3.79 3.41-4.19 3.37-.91 9.16 4.68 14.28 9.61 7.83 7.54 16.72 16.09 24.34 10.47 5.2-3.83 11.23-4.74 16.12-2.44 5.53 2.6 8.93 8.99 9.32 17.55.04.84.67 1.52 1.48 1.64 4.38 41.61 4.07 54.93 1.1 64.53v.01z"
          />
        </G>
        <G id="hamstrings" fill="#000">
          <Path
            id="Vector_4"
            d="M455.77 791.39c-1.19 6.38-2.58 12.65-4.21 18.78-.49 2.22-.72 4.55-.76 7-3.9 15.79-9.27 30.08-15.03 30.77-2.1.24-6.46-1.5-12.31-16.1-7.27-18.11-9.18-19.9-11.54-19.49-2.72.47-2.85 4.22-3.14 13.29-.44 13.91-1.19 37.18-14.61 37.18-11.9 0-19.74-20.05-27.07-69.19-.08-.49-.35-.91-.73-1.17-3.47-16.43-7.45-30.43-11.55-44.89-3.24-11.39-6.58-23.17-9.72-36.45-6.98-29.43-8.2-43.68-9.62-60.19-.39-4.47-.78-9.01-1.29-14.01.84 1.15 1.77 2.19 2.78 3.14 5.97 5.52 14.37 6.89 23.83 6.89 4.61 0 9.48-.33 14.43-.66 1.63-.11 3.27-.22 4.91-.31 8.79-.53 30.52-3.65 42.65-21.18 10.11-14.62 10.97-35.24 2.55-61.28-1.64-5.04-2.93-9.76-4.19-14.33-3.1-11.22-5.73-20.73-11.38-28.13 13.7 8.25 26.93 20.08 28.18 31.58v.04c.03 1.44-.05 2.61-.12 3.72-.28 4.27-.53 7.95 3.98 20.95 8.32 23.97 29.87 128.52 13.96 214.07v-.03z"
          />
          <Path
            id="Vector_5"
            d="M326.33 636.9c-.52 5.01-.91 9.56-1.29 14.02-1.41 16.5-2.63 30.76-9.62 60.2-3.15 13.28-6.49 25.05-9.72 36.45-4.1 14.46-8.08 28.46-11.55 44.89-.39.26-.66.68-.74 1.17-7.32 49.15-15.16 69.19-27.06 69.19-13.43 0-14.17-23.27-14.62-37.18-.29-9.07-.41-12.82-3.13-13.29-2.35-.4-4.26 1.38-11.54 19.49-5.85 14.59-10.22 16.36-12.31 16.1-5.75-.69-11.14-15.01-15.04-30.81-.05-2.47-.29-4.8-.78-7.05-1.61-6.06-2.99-12.27-4.16-18.58-.02-.06-.03-.13-.04-.19-15.89-85.48 5.65-190.03 13.97-214 4.51-13 4.27-16.68 3.99-20.95-.07-1.12-.15-2.29-.12-3.73v-.06c1.28-11.48 14.49-23.3 28.18-31.54-5.66 7.41-8.28 16.92-11.38 28.14-1.26 4.56-2.56 9.28-4.19 14.32-8.43 26.04-7.58 46.66 2.55 61.28 12.13 17.53 33.86 20.65 42.65 21.18 1.64.1 3.28.21 4.91.31 4.95.33 9.81.66 14.43.66 9.46 0 17.86-1.38 23.82-6.89 1.03-.94 1.95-1.99 2.79-3.16v.03z"
          />
        </G>
        <G id="glutes" fill="#000">
          <Path
            id="Vector_6"
            d="M419.87 622.8c-11.23 16.25-31.67 19.17-39.94 19.67-1.65.1-3.31.21-4.94.31-14.32.96-27.85 1.87-35.6-5.29-4.96-4.58-7.37-12.25-7.37-23.45V553.7c0-17.89 5.12-30.73 15.2-38.16 11.92-8.78 28.54-8.24 40.1-4.82 1.86.55 3.58 1.15 5.18 1.81 0 0 .03 0 .04.02.55.22 1.08.45 1.6.69.03 0 .05.02.07.03 15.29 6.98 18.68 19.28 23.52 36.81 1.26 4.6 2.58 9.35 4.23 14.47 8.08 24.96 7.37 44.56-2.1 58.24l.01.01z"
          />
          <Path
            id="Vector_7"
            d="M328.49 553.72v60.34c0 11.2-2.4 18.87-7.36 23.45-7.74 7.16-21.28 6.25-35.6 5.29-1.64-.11-3.29-.22-4.94-.31-8.27-.5-28.7-3.42-39.95-19.67-9.47-13.68-10.17-33.28-2.1-58.24 1.65-5.11 2.96-9.87 4.23-14.47 4.83-17.54 8.23-29.83 23.52-36.81.59-.24 1.17-.48 1.71-.74 1.59-.66 3.31-1.25 5.15-1.8 11.57-3.43 28.18-3.96 40.11 4.82 10.09 7.43 15.2 20.26 15.2 38.16l.03-.02z"
          />
        </G>
        <G id="hands" fill="#000">
          <Path
            id="Vector_8"
            d="M639.94 626.64c.44-.52.36-.97-.63-3.61-1.08-2.9-2.88-7.75-3.72-16.17-.15-.79-.35-1.86-.5-2.34-.1-.02-.21-.03-.32-.06-.87-.16-2.16-.4-4.18-1.33.36 1.75.52 3.52.69 5.35.22 2.49.45 5.06 1.22 7.96 2.27 8.63 1.88 9.63-1.83 14.87-.39.55-.82 1.16-1.3 1.84-1.3 1.9-1.78 3.73-1.41 5.47.3 1.47 1.15 2.68 1.96 3.57.85-1.84 2.21-3.65 4.07-5.42.7-1.42 3.69-7.4 5.95-10.12v-.01z"
          />
          <Path
            id="Vector_9"
            d="M651.49 583.8c-3.02-9.69-5.89-18.85-5.92-24.06.31-11.64-.58-16.77-1.79-19.68-2.5 6.52-6.66 11.34-11.52 13.21-1.71.66-3.62.97-5.67.97-3.29 0-6.9-.84-10.54-2.46 1.9 6.05.57 8.47.2 9-.03.03-.04.05-.07.08-8 9.85-7.03 15.67-5.99 21.85.49 2.9.99 5.9.44 9.21-3.09 14.65-3.29 20.48-3.24 22.31 2.7 1.69 4.9 2.1 6.55 1.22 4.41-2.36 5.77-13.81 5.6-20.47-.02-.68.36-1.31.98-1.62.62-.3 1.36-.22 1.9.21 2.33 1.87 4.28 3.25 5.89 4.29.07.04.13.08.2.13 3.86 2.44 5.81 2.81 6.91 3.02 2.76.52 2.98 1.72 3.64 5.27 0 .04 0 .1.02.15.8 8.02 2.44 12.45 3.54 15.38 1.06 2.84 1.82 4.9.04 7.05-2.25 2.7-5.6 9.62-5.63 9.69-.1.2-.23.38-.39.53-2.89 2.65-4.31 5.29-4.25 7.83.05 1.74.8 3.17 1.49 4.13 2.98-3.12 5.98-5.3 8.67-7.24 4.48-3.25 7.73-5.59 8.55-10.55.62-3.75 1.69-7.88 2.71-11.86 1.55-5.97 3.15-12.14 3.16-16.84-.51-4.77-3.04-12.89-5.5-20.74l.02-.01z"
          />
          <Path
            id="Vector_10"
            d="M29.85 631.3c-3.72-5.24-4.1-6.24-1.83-14.87.77-2.89 1-5.46 1.22-7.96.17-1.83.33-3.6.69-5.35-2.02.93-3.32 1.17-4.19 1.33-.1.03-.21.04-.31.06-.16.48-.36 1.56-.5 2.34-.84 8.42-2.64 13.27-3.73 16.17-.98 2.64-1.06 3.09-.62 3.61 2.26 2.72 5.25 8.7 5.95 10.12 1.87 1.77 3.23 3.57 4.07 5.41.81-.87 1.65-2.09 1.96-3.56.36-1.74-.11-3.58-1.42-5.47-.47-.68-.9-1.29-1.29-1.84v.01z"
          />
          <Path
            id="Vector_11"
            d="M49.89 591.99c-.57-3.38-.06-6.38.42-9.28 1.03-6.17 2.01-11.99-6-21.85-.02-.03-.04-.05-.06-.08-.37-.52-1.71-2.95.2-8.99-3.63 1.62-7.25 2.46-10.54 2.46-2.04 0-3.95-.32-5.67-.98-4.86-1.87-9.01-6.69-11.51-13.22-1.21 2.91-2.1 8.03-1.79 19.63-.04 5.26-2.89 14.42-5.92 24.11-2.45 7.85-4.99 15.96-5.49 20.74.02 4.69 1.62 10.87 3.16 16.84 1.03 3.99 2.1 8.11 2.72 11.86.82 4.96 4.06 7.3 8.54 10.55 2.7 1.94 5.69 4.12 8.67 7.24.7-.96 1.46-2.4 1.49-4.16 0-.47-.03-.95-.12-1.43-.41-2.08-1.79-4.21-4.12-6.36-.16-.15-.29-.33-.39-.53-.04-.07-3.39-7-5.63-9.69-1.79-2.15-1.03-4.2.04-7.05 1.09-2.93 2.74-7.36 3.54-15.38 0-.05 0-.1.02-.15.66-3.55.88-4.75 3.64-5.27 1.57-.3 4.86-.93 13-7.44a1.78 1.78 0 011.89-.21c.62.31 1.01.94.99 1.62-.18 6.66 1.18 18.11 5.6 20.47 1.65.88 3.85.47 6.55-1.22.05-1.78-.13-7.6-3.22-22.22l-.01-.01z"
          />
        </G>
        <G id="forearms" fill="#000">
          <Path
            id="Vector_12"
            d="M641.37 536.12c-1.96 6.88-5.9 12.17-10.38 13.89-4.44 1.69-10.73.5-16.91-3.2-4.3-9.14-14.31-23.73-36.66-46.42-13.84-13.95-23.22-30.12-32.29-45.76-5.73-9.89-11.14-19.21-17.56-27.96l-.42-.57c-5.13-6.98-8.93-12.15-12-16.23 5.56 3.85 9.87 5.69 13.21 5.69 1.03 0 1.97-.17 2.82-.52 5.08-2.06 5.49-9.14 5.89-15.99.27-4.54.57-9.68 2.41-10.81 2.17-1.33 6.32-.12 9.98.95 4.49 1.31 9.14 2.67 11.84-.1 1.07-1.1 1.66-2.7 1.74-4.91.68.79 1.44 1.57 2.29 2.35 7.59 6.98 33.48 32.65 47.87 69.77 9.51 24.54 17.43 48.99 22.17 63.6 2.34 7.23 3.9 12.01 4.64 13.76.42.99.89 1.75 1.37 2.44l-.01.02z"
          />
          <Path
            id="Vector_13"
            d="M145.36 409.89c-3.07 4.07-6.87 9.25-11.99 16.22l-.42.57c-6.43 8.74-11.84 18.07-17.56 27.96-9.07 15.63-18.45 31.8-32.3 45.76-22.35 22.69-32.36 37.27-36.65 46.41-6.18 3.7-12.47 4.9-16.91 3.2-4.48-1.72-8.42-7.01-10.38-13.9.48-.69.95-1.45 1.37-2.43.74-1.75 2.29-6.53 4.63-13.76 4.74-14.61 12.67-39.06 22.18-63.6 14.39-37.11 40.27-62.78 47.87-69.77.85-.79 1.61-1.57 2.3-2.36.08 2.22.66 3.81 1.74 4.92 2.7 2.76 7.34 1.41 11.84.1 3.66-1.08 7.81-2.28 9.98-.95 1.85 1.14 2.15 6.28 2.4 10.81.4 6.85.81 13.93 5.9 15.99.85.34 1.79.52 2.81.52 3.34 0 7.65-1.84 13.2-5.68l-.01-.01z"
          />
        </G>
        <G id="triceps" fill="#000">
          <Path
            id="Vector_14"
            d="M558.73 386.68c-1.2 1.24-4.96.14-8.28-.83-4.59-1.34-9.33-2.73-12.84-.57-3.41 2.1-3.73 7.68-4.08 13.59-.32 5.5-.68 11.73-3.7 12.96-2.65 1.08-9.14-.61-24.99-14.77 0 0 0-.02-.02-.03l-.04-.04c-1.59-1.78-3.24-3.51-5.2-5.5-8.08-8.18-28.8-40.45-36.6-52.6l-.5-.76v-.02s-.02-.03-.03-.04c-3.09-5.07-.72-16.32 1.57-27.21 2.25-10.68 4.56-21.65 2.09-28.59 12.14 4.23 23.77 4.75 29.99 5.02.7.04 1.33.06 1.88.09 7.16.39 14.43 6.24 14.94 6.66l.02.02.03.03c.87.75 22.04 19.45 29.55 45.42.02.09.05.17.09.24.26.57 6.42 13.93 10.73 21.4 1.4 2.41 2.1 5.09 2.81 7.9.04.15.07.3.11.45.57 2.27 1.18 4.68 2.17 7.14v.02c1.75 6.98 1.03 9.28.31 10.02h-.01z"
          />
          <Path
            id="Vector_15"
            d="M198.03 338.14l-.03.05-.45.71c-7.81 12.15-28.53 44.42-36.6 52.6-1.97 2-3.64 3.75-5.26 5.55v.02c-15.85 14.14-22.34 15.83-24.98 14.76-3.02-1.22-3.39-7.46-3.7-12.96-.34-5.91-.67-11.49-4.07-13.59-3.52-2.16-8.27-.77-12.85.57-3.31.97-7.08 2.07-8.28.83-.73-.74-1.44-3.03.31-10.02v-.02c.99-2.47 1.59-4.87 2.17-7.14.75-2.99 1.45-5.8 2.93-8.35 4.31-7.47 10.47-20.83 10.73-21.4.04-.08.06-.16.09-.24 7.61-26.35 29.36-45.27 29.58-45.45 0 0 .03-.02.04-.04.67-.54 7.84-6.26 14.92-6.64.56-.03 1.18-.05 1.88-.09 6.22-.27 17.86-.79 29.99-5.03-2.47 6.94-.17 17.91 2.09 28.6 2.3 10.93 4.69 22.22 1.53 27.27l-.04.01z"
          />
        </G>
        <G id="lats" fill="#000">
          <Path
            id="Vector_16"
            d="M460.55 310.16c-2.47 11.73-4.81 22.83-1.44 29.18-1.15 5.04-8.99 38.57-20.51 56.67-11.74 18.46-11.85 45.39-11.92 59.85 0 1.61-.02 3.08-.04 4.39-.2 12.91 3.54 55.42 9.02 78.37-9.26-12.73-27.37-23.51-39.84-28.45-.68-.32-1.38-.62-2.1-.92-12.29-5.86-11.8-17.54-11.17-32.16.52-12.39 1.11-26.43-6.06-39.94-27.18-51.29-34.71-74.09-23.78-106.94.02-.04.03-.1.05-.15 1.04-2.86 2.17-5.89 3.39-9.09 8.26-21.71 20.7-51.34 41.17-88.91l.23-.25c9.33 8.75 18.9 16.09 29.02 23.85 6.51 4.99 13.24 10.15 20.16 15.89 4.25 3.52 8.81 6.24 13.42 8.35h.02c5.96 3.89 3.13 17.3.4 30.26h-.02z"
          />
          <Path
            id="Vector_17"
            d="M284.03 437.14c-7.16 13.52-6.57 27.55-6.05 39.94.62 14.65 1.11 26.36-11.25 32.19 0 0-.03 0-.04.02-.65.26-1.29.54-1.9.82h-.03c-12.47 4.94-30.64 15.74-39.91 28.5 5.46-22.96 9.21-65.46 9.01-78.37-.02-1.31-.03-2.79-.04-4.4-.06-14.46-.18-41.38-11.92-59.84-11.52-18.1-19.37-51.63-20.51-56.67 3.37-6.35 1.03-17.45-1.44-29.18-2.75-12.99-5.57-26.43.43-30.29 4.6-2.1 9.15-4.82 13.39-8.33 6.92-5.74 13.65-10.9 20.16-15.89 10.12-7.75 19.69-15.1 29.02-23.85l.23.25c23.51 43.19 36.45 75.86 44.59 98.11 0 .02.02.03.02.04 10.93 32.85 3.39 55.65-23.79 106.94l.03.01z"
          />
        </G>
        <G id="lowerback">
          <Path
            id="Vector_18"
            d="M384.18 506.32c-12-2.59-27.49-2.09-39.07 6.44-7.44 5.48-12.42 13.54-14.86 24.07-2.44-10.53-7.42-18.59-14.86-24.07-11.58-8.53-27.07-9.03-39.06-6.44 6.12-7.5 5.66-18.21 5.19-29.38-.5-11.94-1.08-25.48 5.64-38.17 20.65-38.94 30.2-62.3 28.8-86.04 4.76 12.64 8.11 18.59 14.12 18.69h.37c6.01-.11 9.36-6.07 14.13-18.71-1.42 23.73 8.13 47.1 28.78 86.06 6.73 12.68 6.15 26.23 5.65 38.17-.47 11.17-.93 21.88 5.19 29.38h-.02z"
            fill="#000"
          />
        </G>
        <G id="traps-middle">
          <Path
            id="Vector_19"
            d="M390.36 237.49c-18.28 34.34-29.74 61.7-37.49 82.12 0 0 0 .03-.02.04 0 .04-.03.06-.04.1-1.22 3-2.31 5.9-3.25 8.73-.03.04-.04.09-.05.13-1.56 4.29-2.96 8.2-4.22 11.72-6.56 18.38-9.85 27.6-15.04 27.6-5.19 0-8.48-9.22-15.04-27.6-1.26-3.52-2.65-7.43-4.22-11.72 0-.04-.03-.09-.05-.13-.95-2.83-2.03-5.73-3.25-8.73 0-.04-.03-.06-.04-.1 0 0 0-.03-.02-.04-7.76-20.42-19.22-47.78-37.5-82.12 2.48 1.17 5.04 1.63 7.88 1.63 3.63 0 7.73-.73 12.72-1.63 8.88-1.59 21.05-3.78 39.5-3.78s30.63 2.19 39.51 3.78c4.99.89 9.09 1.63 12.72 1.63 2.84 0 5.39-.45 7.88-1.63h.02z"
            fill="#000"
          />
        </G>
        <G id="rear-shoulders" fill="#000">
          <Path
            id="Vector_20"
            d="M511.59 288.79c-3.24-2.06-8.25-4.62-13.43-4.9-.56-.04-1.2-.06-1.91-.09-6.97-.31-21.03-.93-34.55-7.07-4.38-1.99-8.7-4.55-12.71-7.89-6.97-5.78-13.74-10.96-20.27-15.97-10.06-7.72-19.59-15.02-28.81-23.66 6.14-6.45 17.33-16.23 36.59-15.6h.02c.17 0 16.25 1.4 33.54 11.85 15.31 9.27 34.65 27.7 41.54 63.32l-.01.01z"
          />
          <Path
            id="Vector_21"
            d="M260.61 229.21c-9.23 8.65-18.75 15.95-28.81 23.66-6.54 5.01-13.29 10.19-20.27 15.97-4 3.33-8.34 5.89-12.71 7.89-13.52 6.15-27.58 6.76-34.55 7.07-.71.03-1.35.05-1.92.09-5.18.27-10.19 2.84-13.43 4.9 6.9-35.62 26.23-54.06 41.55-63.33 17.29-10.46 33.37-11.85 33.53-11.85h.02c19.28-.62 30.45 9.14 36.6 15.6h-.01z"
          />
        </G>
        <G
          id="body"
          stroke="#484A68"
          strokeWidth={3.52}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path
            id="Vector_22"
            d="M266.34 935.47c-.89-19.84-16.47-25.12-28.26-16.43-14.11 10.4-36.12-39.53-43.56-12.29"
          />
          <Path
            id="Vector_23"
            d="M17.22 535.8c2.09 7.99 6.55 13.88 11.67 15.84 4.99 1.91 12 .65 18.85-3.56"
          />
          <Path
            id="Vector_24"
            d="M102.63 368.78c-11.91 35.01 10.78 12.73 19.35 18 8.73 5.36-8.23 50.09 34.96 11.52"
          />
          <Path
            id="Vector_25"
            d="M223.86 211.87c23.48-.79 35.4 13.24 40.81 19.16 12.57 13.74 20.72.94 65.59.94"
          />
          <Path
            id="Vector_26"
            d="M264.67 231.03c52.5 96.35 51.77 138.65 65.59 138.65"
          />
          <Path
            id="Vector_27"
            d="M146.43 292.74s7.92-6.67 16.02-7.1c8.1-.43 32.12-.43 50.22-15.45 18.1-15.01 34.72-25.92 50.42-40.9"
          />
          <Path
            id="Vector_28"
            d="M306.02 320.31c16.1 39.45 8.58 62.94-20.42 117.65-15.8 29.81 7.37 62.98-19.95 73.7-17.48 6.86-43.08 23.91-44.85 40.85"
          />
          <Path
            id="Vector_29"
            d="M199.54 339.06c7.74-12.38-13.12-52.58 0-60.72"
          />
          <Path
            id="Vector_30"
            d="M330.26 614.06c0 35.81-24.38 31.69-49.78 30.16-27.16-1.64-63.32-19.3-43.62-80.18 8.85-27.35 8.53-46.89 35.82-54.97 19.3-5.72 57.58-4.57 57.58 44.65"
          />
          <Path
            id="Vector_31"
            d="M203 791.63s13.43 96.36 35.71 40.85c22.28-55.5-1.29 32.07 27.64 32.07 13.1 0 21.17-19.38 28.81-70.69"
          />
          <Path
            id="Vector_32"
            d="M183.71 965.72c1.71 31.85 5.8 54.85 19.28 55.65 13.93.82 20.85-31.78 26.38-31.31 6.93.59-.18 31.18 15.44 34.42 4.79.99 14.84 1.64 24-22.13"
          />
          <Path
            id="Vector_33"
            d="M394.18 935.47c.89-19.84 16.47-25.12 28.26-16.43 14.11 10.4 36.12-39.53 43.56-12.29"
          />
          <Path
            id="Vector_34"
            d="M643.3 535.8c-2.09 7.99-6.55 13.88-11.67 15.84-4.99 1.91-12 .65-18.85-3.56"
          />
          <Path
            id="Vector_35"
            d="M557.89 368.78c11.91 35.01-10.78 12.73-19.35 18-8.73 5.36 8.23 50.09-34.96 11.52"
          />
          <Path
            id="Vector_36"
            d="M390.56 191.86c-21.92-5.91-45.38-4.01-55.35-3.59-3.3.14-6.59.14-9.89 0-9.98-.42-33.44-2.32-55.35 3.59"
          />
          <Path
            id="Vector_37"
            d="M436.66 211.87c-23.48-.79-35.4 13.24-40.81 19.16-12.57 13.74-20.72.94-65.59.94"
          />
          <Path
            id="Vector_38"
            d="M395.85 231.03c-52.5 96.35-51.77 138.65-65.59 138.65"
          />
          <Path
            id="Vector_39"
            d="M514.09 292.74s-7.92-6.67-16.02-7.1c-8.1-.43-32.12-.43-50.22-15.45-18.1-15.01-34.72-25.92-50.42-40.9"
          />
          <Path
            id="Vector_40"
            d="M354.5 320.31c-16.1 39.45-8.58 62.94 20.42 117.65 15.8 29.81-7.37 62.98 19.95 73.7 17.48 6.86 43.08 23.91 44.85 40.85"
          />
          <Path
            id="Vector_41"
            d="M460.98 339.06c-7.74-12.38 13.12-52.58 0-60.72"
          />
          <Path
            id="Vector_42"
            d="M330.26 614.06c0 35.81 24.38 31.69 49.78 30.16 27.16-1.64 63.32-19.3 43.62-80.18-8.85-27.35-8.53-46.89-35.82-54.97-19.3-5.72-57.58-4.57-57.58 44.65"
          />
          <Path
            id="Vector_43"
            d="M457.52 791.63s-13.43 96.36-35.71 40.85c-22.28-55.5 1.29 32.07-27.64 32.07-13.1 0-21.17-19.38-28.81-70.69"
          />
          <Path
            id="Vector_44"
            d="M476.8 965.72c-1.71 31.85-5.8 54.85-19.28 55.65-13.93.82-20.85-31.78-26.38-31.31-6.93.59.18 31.18-15.44 34.42-4.79.99-14.84 1.64-24-22.13"
          />
          <Path id="Vector_45" d="M330.26 553.71v60.35" />
          <Path
            id="Vector_46"
            d="M330.26 619.22c-5.25 37.26-2.28 46.61-13.11 92.29-9.91 41.79-21.41 67.61-27.83 121.66-6.42 54.05-25.22 43.33-25.68 67.01 13.34 111.61 6.88 93.43-4.16 125.06-11.04 31.63-21.35 72.92-23.59 90.89-2.37 19.05 1.52 17.62-.47 27.29-1.99 9.66-1.75 24.1-.66 32.87 1.09 8.77.3 25.48-21.05 25.48s-30.58-13.24-30.58-13.24c-9.05-2.68-18.82-5.91-25.15-6.98-16.47-4.47-5.13-14.14-5.13-14.14 4.18-5.7 10.27-5.14 10.27-5.14 3.74-4.98 8.08-4.52 8.08-4.52 9.23-5.73 19.54-19.77 19.54-19.77 1.65-8.95 3.29-15.73 4.39-27.67 1.1-11.94-4.39-55.88-10.42-120.72-6.03-64.83 17.42-88.35 18.01-117.83.59-29.47 7.5-47.62 4.55-61.22-23.86-89.98 1.7-210.43 9.8-233.79 8.1-23.36.47-15.59 5.89-37.67 5.42-22.07 9.39-65.4 9.18-78.81-.21-13.41 1.04-43.32-11.68-63.33-12.72-20.01-20.88-57.88-20.88-57.88-7.83 12.19-28.95 45.18-37.32 53.67-8.37 8.49-11.09 12.21-27.84 34.99-16.75 22.77-27.42 51.13-50.03 73.91-46.47 47.2-38.65 58.15-38.65 58.15 12.42 15.29 4.33 22.29 5.92 31.86 4.05 19.15 3.18 23.57 3.18 23.57-16.47 11.29-15.6-20.29-15.6-20.29-15.89 12.72-14.59 4-16.02 11.67-1.55 15.69-6.38 18.24-3.97 21.14 2.41 2.9 5.86 10.06 5.86 10.06 9.83 9.04 1.55 15.86 1.55 15.86-8.28-9.55-17.41-10.74-18.96-20.12-1.55-9.38-5.9-20.97-5.9-29.08 1.08-10.53 11.36-35.4 11.42-44.71-.62-23.04 3.5-21.54 5.71-26.73 2.21-5.19 12.71-40.97 26.79-77.3 14.09-36.33 39.03-61.88 48.31-70.42 9.29-8.54 7.34-17.51 11.66-24.99 4.32-7.48 10.66-21.26 10.66-21.26 7.86-27.19 30.11-46.29 30.11-46.29 12.11-75.75 77.43-80.87 77.43-80.87"
          />
          <Path
            id="Vector_47"
            d="M29.74 645.19s8.31-5.16 2.87-13.06c-4.55-6.58-5.28-6.14-2.87-15.29 1.87-7.08.7-12.38 3.36-17.5"
          />
          <Path
            id="Vector_48"
            d="M330.26 619.22c5.25 37.26 2.28 46.61 13.11 92.29 9.91 41.79 21.41 67.61 27.83 121.66 6.42 54.05 25.22 43.33 25.68 67.01-13.34 111.61-6.88 93.43 4.16 125.06 11.04 31.63 21.35 72.92 23.59 90.89 2.37 19.05-1.52 17.62.47 27.29 1.99 9.66 1.75 24.1.66 32.87-1.09 8.77-.3 25.48 21.05 25.48s30.58-13.24 30.58-13.24c9.05-2.68 18.82-5.91 25.15-6.98 16.47-4.47 5.13-14.14 5.13-14.14-4.18-5.7-10.27-5.14-10.27-5.14-3.74-4.98-8.08-4.52-8.08-4.52-9.23-5.73-19.54-19.77-19.54-19.77-1.65-8.95-3.29-15.73-4.39-27.67-1.1-11.94 4.39-55.88 10.42-120.72 6.03-64.83-17.42-88.35-18.01-117.83-.59-29.47-7.5-47.62-4.55-61.22 23.86-89.98-1.7-210.43-9.8-233.79-8.1-23.36-.47-15.59-5.89-37.67-5.42-22.07-9.39-65.4-9.18-78.81.21-13.41-1.04-43.32 11.68-63.33 12.72-20.01 20.88-57.88 20.88-57.88 7.83 12.19 28.95 45.18 37.32 53.67 8.37 8.49 11.09 12.21 27.84 34.99 16.75 22.77 27.42 51.13 50.03 73.91 46.47 47.2 38.65 58.15 38.65 58.15-12.42 15.29-4.33 22.29-5.92 31.86-4.05 19.15-3.18 23.57-3.18 23.57 16.47 11.29 15.6-20.29 15.6-20.29 15.89 12.72 14.59 4 16.02 11.67 1.55 15.69 6.38 18.24 3.97 21.14-2.41 2.9-5.86 10.06-5.86 10.06-9.83 9.04-1.55 15.86-1.55 15.86 8.28-9.55 17.41-10.74 18.96-20.12 1.55-9.38 5.9-20.97 5.9-29.08-1.08-10.53-11.36-35.4-11.42-44.71.62-23.04-3.5-21.54-5.71-26.73-2.21-5.19-12.71-40.97-26.79-77.3-14.09-36.33-39.03-61.88-48.31-70.42-9.28-8.54-7.34-17.51-11.66-24.99-4.32-7.48-10.66-21.26-10.66-21.26-7.86-27.19-30.11-46.29-30.11-46.29-12.11-75.75-77.43-80.87-77.43-80.87"
          />
          <Path
            id="Vector_49"
            d="M630.78 645.19s-8.31-5.16-2.87-13.06c4.55-6.58 5.28-6.14 2.87-15.29-1.87-7.08-.7-12.38-3.36-17.5"
          />
          <G id="Group">
            <Path
              id="Vector_50"
              d="M228.95 211.29c1.57-.7 9.71-6.15 14.7-8.41 4.99-2.26 25.39-10.44 30.52-12.98 5.14-2.54 14.41-11.57 14.41-11.57l.25-3.16c.72-7.78 1.02-39.35 1.02-39.35-2.91-5.76-3.49-15.57-3.49-15.57-7.29 1.44-12.53-1.87-13.99-21.04-.83-10.94 2.52-14.45 5.55-15.44"
            />
            <Path
              id="Vector_51"
              d="M382.62 83.78c3.02 1 6.37 4.51 5.54 15.44-1.46 19.17-6.71 22.48-13.99 21.04 0 0-.58 9.81-3.5 15.57 0 0 .29 31.57 1.03 39.35l.24 3.16s9.27 9.03 14.41 11.57c5.14 2.54 25.54 10.73 30.53 12.98 4.99 2.25 13.13 7.71 14.69 8.41"
            />
          </G>
          <Path
            id="Vector_52"
            d="M330.26 131.3c15.78 0 25.12 12.03 29.48 9.51 4.35-2.51 8.07-13.01 16.41-23.77s-.36-12.56 9.08-42.7c9.43-30.14-14.51-56.46-20.68-60.41-6.17-3.95 17.41 10.04 4.72-3.23-12.7-13.27-38.46-4.3-46.44-2.15-7.98 2.15 27.21-9.69 0-6.1-22.12 2.92-39.92 14.6-46.79 34.66"
          />
          <Path
            id="Vector_53"
            d="M330.26 131.3c-15.79 0-25.13 12.03-29.48 9.51-4.36-2.51-8.08-13.01-16.42-23.77-8.34-10.76.36-12.56-9.07-42.7-1.49-4.74-2.14-17.9-2.17-22.01v-.04a39.082 39.082 0 012.93-15.18"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0h660.46v1206.46H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default RearMuscles
