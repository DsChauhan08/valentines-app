"use client";
import { useState } from "react";
import phrases from "./phrases.json";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      className="flex flex-col items-center justify-center h-screen -mt-16"
    >
      {yesPressed ? (
        <>
          <div style={{ display: "block" }}>
            <img
              className="rounded-lg"
              src="https://imgix.ranker.com/list_img_v2/16314/356314/original/the-very-best-of-the-pickup-line-scientist-meme?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355"
              alt=""
            />
          </div>
          <div className="text-5xl bg-red-500 font-bold my-4">Beacuse you have everything I'm searching for !!</div>
        </>
      ) : (
        <>
          <img
            className="rounded-lg h-[200px]"
            src="https://cloudgenius.s3.amazonaws.com/belantime.jpeg"
            alt="Belantime"
          />
          <h1 className="text-4xl font-bold my-4">
            Are you google?
          </h1>
          <div style={{ display: "block" }}>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              No
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Yes" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
