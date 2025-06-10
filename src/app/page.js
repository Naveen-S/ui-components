import ComponentLinkContainer from "@/components/ComponentLinkContainer";

export default function Home() {
  return (
    <div className="flex flex-col gap-3 py-3 justify-center items-center">
      <div className="flex m-4 flex-wrap justify-center">
        <ComponentLinkContainer to={"/otp"}> OTP </ComponentLinkContainer>
        <ComponentLinkContainer to={"/chips"}> Chips </ComponentLinkContainer>
        <ComponentLinkContainer to={"/like"}> Like </ComponentLinkContainer>
        <ComponentLinkContainer to={"/nestedCheckbox"}> Nested Checkbox </ComponentLinkContainer>
        <ComponentLinkContainer to={"/explorer"}> File Explorer </ComponentLinkContainer>
        <ComponentLinkContainer to={"/traffic"}> Traffic Lights </ComponentLinkContainer>
        <ComponentLinkContainer to={"/star"}> Star </ComponentLinkContainer>
        <ComponentLinkContainer to={"/carousal"}> Carousal </ComponentLinkContainer>
        <ComponentLinkContainer to={"/counter"}> Counter </ComponentLinkContainer>
        <ComponentLinkContainer to={"/dataTable"}>  Data Table </ComponentLinkContainer>
      </div>
    </div>
  );
}
