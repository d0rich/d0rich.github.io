import { ResumeData } from '~~/server/routes/api/resume/data'

export function useResumeData() {
  const resumeType = computed(() => useRoute().params.type as string)
  return useFetch<ResumeData>('/api/resume/data', {
    query: { resumeType: resumeType.value }
  })
}
