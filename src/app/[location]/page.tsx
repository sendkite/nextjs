import HomeButton from "@/components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};

export default function Detail({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";

  return (
    <>
      <h1>{name}의 날씨</h1>
      <HomeButton />
    </>
  );
}
