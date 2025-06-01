import ComponentLinkContainer from "@/components/ComponentLinkContainer";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 py-3 justify-center items-center">
      <div className="flex m-4">
        <ComponentLinkContainer to={"/otp"}> OTP </ComponentLinkContainer>
        <ComponentLinkContainer to={"/chips"}> Chips </ComponentLinkContainer>
        <ComponentLinkContainer to={"/like"}> Like </ComponentLinkContainer>
        <ComponentLinkContainer to={"/nestedCheckbox"}> Nested Checkbox </ComponentLinkContainer>
      </div>
    </div>
  );
}
