import Image from '@/components/Image'
import NewsletterForm from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'

const IntroCard = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            {/* <Image
              alt='devin reeks'
              src='/static/images/devin.png'
              className='rounded-full'
              width={200}
              height={200}
            /> */}
            <div className='flex flex-col items-center gap-2'>
              <h1 className='text-6xl font-extrabold font-extrabold leading-14'>
                Devin Reeks
              </h1>
              {/* <Image
                alt='underline'
                src='/static/images/underline.svg'
                width={390}
                height={25}
              /> */}
            </div>
          </div>

          <p className='mb-3 mt-4 text-2xl'>
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
            {/* <Image
              src='/static/images/cta-arrow.svg'
              alt='cta'
              width={210}
              height={120}
            /> */}
            <div className='flex flex-col justify-center'>
              {siteMetadata.newsletter.provider !== '' && (
                <div className='subscriber flex items-center justify-center pt-4'>
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
