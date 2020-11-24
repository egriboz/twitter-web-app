import React from 'react'

import Layout from '../components/layout/'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Fatih Eğriboz"
        slug="egriboz"
        datetime={new Date('2020-10-14')}
        text={`Lorem ipsum 
        sit dolor amet`}
      >
        Merhaba ilk tweet
      </Tweet>
      <Tweet
        name="Fatih Eğriboz"
        slug="egriboz"
        datetime={new Date('2020-10-14')}
        text={`The most infamous CSS rule is:

        button:focus {
          outline: none;
        }
        
        This style removes the "ugly" focus ring on inputs and links, but it means keyboard users can't navigate; it totally breaks the experience for them (and any non-mouse users) Buruşuk surat
        
        A thread with some solutions Tweet dizisi`}
      >
        Merhaba ilk tweet
      </Tweet>
    </Layout>
  )
}

export default HomePage
