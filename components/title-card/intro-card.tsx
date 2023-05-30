import Image from '@/components/Image'

const IntroCard = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='flex items-center gap-4'>
            <Image
              alt='devin reeks'
              src='/static/images/devin.jpeg'
              width={150}
              height={165}
            />
            <h1 className='text-6xl font-extrabold leading-14 font-extrabold'>
              Devin Reeks
            </h1>
          </div>

          <p className='mt-2 text-2xl'>
            Hey, I'm Devin. I'm a software developer at a payment gateway
            company. I typically develop software in Ruby on Rails and
            typescript/react. However, in my spare time I have a passion for
            devops (because it doesn't count unless you deliver) and golang
            (because its cool)
          </p>
          <p className='mt-2 text-sm'>
            Topics: AWS, Golang, CI/CD, git, clean code
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntroCard
