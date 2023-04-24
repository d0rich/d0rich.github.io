export function usePrintSetup() {
  const colorMode = useColorMode()
  let colorBeforePrint = colorMode.value
  function beforePrint() {
    colorBeforePrint = colorMode.value
    colorMode.value = "light"
    console.log("Light color mode for printing")
  }
  function afterPrint() {
    colorMode.value = colorBeforePrint
    console.log("Restore color mode after printing")
  }
  onBeforeMount(() => {
    addEventListener("beforeprint", beforePrint)
    addEventListener("afterprint", afterPrint)
  })
  onBeforeUnmount(() => {
    removeEventListener("beforeprint", beforePrint)
    removeEventListener("afterprint", afterPrint)
  })
}
