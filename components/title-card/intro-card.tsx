import Image from '@/components/Image'
import NewsletterForm from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'

const IntroCard = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <Image
              alt='devin reeks'
              src='/static/images/devin.png'
              className='rounded-full'
              width={200}
              height={200}
            />
            <h1 className='text-6xl font-extrabold leading-14 font-extrabold'>
              Devin Reeks
            </h1>
          </div>

          <p className='mt-4 mb-3 text-2xl'>
            Hey, I'm Devin. I'm a{' '}
            <span className='underline'>software developer</span> at a payment
            gateway company.
          </p>

          <p className='my-6 text-xl'>
            I typically develop software in ruby on rails and typescript/react.
            However, in my spare time I have a passion for devops (because it
            doesn't count unless you <span className='underline'>deliver</span>)
            and golang (because its cool).
          </p>
          <div className='tags-container'>
            <div className='flex flex-col justify-center'>
              {siteMetadata.newsletter.provider !== '' && (
                <div className='flex items-center justify-center pt-4 subscriber'>
                  <NewsletterForm />
                </div>
              )}
              <p className='mt-2 text-sm'>
                Topics: AWS, Golang, CI/CD, git, clean code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroCard
