import { useState } from "react";
import WhereToFindScss from "./WhereToFind.module.scss";
import AllInformationJS from "../../informations";

export default function WhereToFind() {
  const [activeItem, setActiveItem] = useState("listItem1");
  const listItems = [
    "listItem1",
    "listItem2",
    "listItem3",
    "listItem4",
    "listItem5",
    "listItem6",
    "listItem7",
  ];

  const toggleActive = (item) => {
    setActiveItem(item);
  };

  return (
    <section className={WhereToFindScss.WhereToFindSection}>
      <div className={WhereToFindScss.WhereToFindHeader}>
        <img
          src={AllInformationJS.whereToFindInformations.Images.subtractImage}
          alt="Subtract Image"
        />
        <h2>{AllInformationJS.texts.whereToFind}</h2>
      </div>
      <div className={WhereToFindScss.WhereToFindBody}>
        <div className={WhereToFindScss.leftPart}>
          <div className={WhereToFindScss.playList}>
            <ul>
              {listItems.map((item) => (
                <li
                  key={item}
                  className={`${WhereToFindScss.playListItem} ${
                    activeItem === item
                      ? WhereToFindScss.playListItemActive
                      : ""
                  }`}
                  onClick={() => toggleActive(item)}
                >
                  <img
                    src={
                      AllInformationJS.whereToFindInformations.Images
                        .imagesInScroll
                    }
                    alt="Images In Scroll"
                  />
                  <p>{AllInformationJS.whereToFindInformations.Texts.texts1}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={WhereToFindScss.rightPart}>
          <div>
            <iframe
              width="90%"
              height="620px"
              src={
                AllInformationJS.whereToFindInformations.YoutubeVideos
                  .firstVideo
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
