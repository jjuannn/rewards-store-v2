import walkthrough1 from "assets/illustrations/walkthroug-1-desktop.png";
import walkthrough2 from "assets/illustrations/walkthroug-2-desktop.png";
import walkthrough3 from "assets/illustrations/walkthroug-3-desktop.png";

import walkthroughIcon1 from "assets/icons/walkthrough-1.svg";
import walkthroughIcon2 from "assets/icons/walkthrough-3.svg";
import walkthroughIcon3 from "assets/icons/walkthrough-2.svg";

import { Flex, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { PresentationCard } from "./Cards";
import { BottomDivider } from "./BottomDivider";
import { TopDivider } from "components/PresentationCards/TopDivider";

const cardsInformation = [
  {
    index: 1,
    img: walkthrough1.src,
    title: "Browse",
    text: "Browse our tech catalog with more than 20 top tech products",
    icon: walkthroughIcon1.src,
  },
  {
    index: 2,
    img: walkthrough2.src,
    title: "Choose",
    text: "Exchange your hard earned AeroPoints for the item you want",
    icon: walkthroughIcon2.src,
  },
  {
    index: 3,
    img: walkthrough3.src,
    title: "Enjoy",
    text: "All done, you can relax! We’ll take care of delivery of your tech item!",
    icon: walkthroughIcon3.src,
  },
];

const PresentationCards: FC = () => {
  return (
    <Flex
      bg="specials.sectionBg"
      height={"100%"}
      padding="20px"
      justifyContent="center"
      alignItems="center"
      direction="column"
      position={"relative"}
    >
      <TopDivider />
      <Stack
        marginY="70px"
        spacing={"10px"}
        direction={{ base: "column", lg: "row" }}
      >
        {cardsInformation.map((data) => {
          return <PresentationCard {...data} key={data.index} />;
        })}
      </Stack>
      <BottomDivider />
    </Flex>
  );
};

export { PresentationCards };
