import { Heading, VStack, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import Filter from "./Filter";
import PropertyCard from "./PropertyCard";

export default function Content() {
  const [type, setType] = useState("House");
  const [price, setPrice] = useState("3000");
  const [location, setLocation] = useState("New York, USA");
  const [moveInDate, setMoveInDate] = useState("15 Nov, 2022");

  let filteredList = arr.filter((item) => {
    if (
      item["type"] == type &&
      item["location"] == location &&
      item["moveInDate"] == moveInDate &&
      (price == 5000
        ? item["price"] < 5000 && item["price"] > 3000
        : item["price"] < 3000)
    ) {
      return item;
    }
  });

  return (
    <VStack alignItems={"flex-start"} w="full" px={32} py={12} spacing={8}>
      <Heading size={"xl"} alignSelf={"start"}>
        Search properties to rent
      </Heading>
      <Filter
        type={type}
        setType={setType}
        location={location}
        setLocation={setLocation}
        price={price}
        setPrice={setPrice}
        moveInDate={moveInDate}
        setMoveInDate={setMoveInDate}
      />
      <SimpleGrid
        justifyItems="center"
        columns={3}
        columnGap="3"
        rowGap="6"
        width="full"
      >
        {filteredList.map((item) => {
          return (
            <PropertyCard
              key={item["id"]}
              src={item["src"]}
              price={item["price"]}
              location={item["location"]}
              name={item["name"]}
            />
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}

const arr = [
  {
    id: 1,
    type: "House",
    price: "2050",
    location: "New York, USA",
    moveInDate: "15 Nov, 2022",
    src: "/images/house1.jpg",
    name: "Santo Palo",
  },
  {
    id: 22,
    type: "House",
    price: "2050",
    location: "New York, USA",
    moveInDate: "15 Nov, 2022",
    src: "/images/house1.jpg",
    name: "Sonny House",
  },
  {
    id: 23,
    type: "House",
    price: "2050",
    location: "New York, USA",
    moveInDate: "15 Nov, 2022",
    src: "/images/house1.jpg",
    name: "Pilo Scale",
  },
  {
    id: 2,
    type: "House",
    price: "4200",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "/images/house2.jpg",
    name: "Los Anton",
  },
  {
    id: 21,
    type: "House",
    price: "4200",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "/images/house2.jpg",
    name: "Boise Villa",
  },
  {
    id: 3,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "/images/house3.jpg",
    name: "Sam Villa",
  },
  {
    id: 19,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "/images/house3.jpg",
    name: "Scorton House",
  },
  {
    id: 20,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "/images/house3.jpg",
    name: "Quito",
  },
  {
    id: 4,
    type: "House",
    price: "4500",
    location: "New York, USA",
    moveInDate: "15 Nov, 2022",
    src: "/images/house4.jpg",
    name: "Palo Alto",
  },
  {
    id: 5,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "/images/house6.jpg",
    name: "New Home",
  },
  {
    id: 18,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "/images/house6.jpg",
    name: "Pfister Home",
  },
  {
    id: 6,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "/images/house6.jpg",
    name: "Citadren",
  },
  {
    id: 17,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "/images/house6.jpg",
    name: "Domino House",
  },
  {
    id: 18,
    type: "House",
    price: "2050",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "/images/house6.jpg",
    name: "Citadren",
  },
  {
    id: 7,
    type: "Office",
    price: "2950",
    location: "New York, USA",
    moveInDate: "15 Nov, 2022",
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Google HQ",
  },
  {
    id: 8,
    type: "Office",
    price: "2950",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "Facebook HQ",
  },
  {
    id: 16,
    type: "Office",
    price: "2950",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "Facebook HQ",
  },
  {
    id: 9,
    type: "Office",
    price: "2950",
    location: "London, UK",
    moveInDate: "1 Jan, 2023",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "Amazon HQ",
  },
  {
    id: 10,
    type: "Office",
    price: "3590",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Microsoft HQ",
  },
  {
    id: 15,
    type: "Office",
    price: "3590",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Microsoft HQ",
  },
  {
    id: 11,
    type: "Office",
    price: "3590",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Cisco HQ",
  },
  {
    id: 14,
    type: "Office",
    price: "3590",
    location: "London, UK",
    moveInDate: "15 Nov, 2022",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Cisco HQ",
  },
  {
    id: 12,
    type: "Office",
    price: "3590",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "React HQ",
  },
  {
    id: 13,
    type: "Office",
    price: "3590",
    location: "New York, USA",
    moveInDate: "1 Jan, 2023",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    name: "React HQ",
  },
];
