import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(MotionPathPlugin)
})