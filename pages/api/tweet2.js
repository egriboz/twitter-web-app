import Twit from '../../lib/twit'

export default (req, res) => {
  //Twit.get('followers/ids', { screen_name: 'egriboz' }, function (
  //Twit.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (
  Twit.get(
    'search/tweets',
    { from: 'fibrecatt since:2012-12-12', count: 20 },
    function (err, data, response) {
      if (err) {
        return res.status(400).json({ message: 'Upsss!' })
      }

      res.status(200).json(data)
    }
  )
}
