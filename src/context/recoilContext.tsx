import { atom, RecoilRoot } from "recoil";
// import { recoilPersist } from "recoil-persist";

// const { persistAtom } = recoilPersist();

export const navState = atom({
  key: "navigation",
  default: 0,
});

export const dophamingState = atom({
  key: "dophamine",
  default: 30,
});

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
