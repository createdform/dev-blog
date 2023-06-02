import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <SocialIcon kind='github' href={siteMetadata.github} size={1.5} />
          <SocialIcon kind='linkedin' href={siteMetadata.linkedin} size={1.5} />
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href='/'>{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
