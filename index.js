const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [
      React.createElement('p', {key: 0}, 'Two grannies having the time of their life!'),
      React.createElement('p', {key: 1}, 'Passengers:'),
      React.createElement('ul', {key: 2}, [
        React.createElement('li', {key: 0}, 'Agnes'),
        React.createElement('li', {key: 1}, 'Muriel')
      ])
    ])
  }
})

class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', {}, [
      React.createElement('p', {key: 0}, "You shouldn't look too far."),
      React.createElement('p', {key: 1}, [
        "Sometimes, the solution is ",
        React.createElement('strong', {key: 0}, 'right in front of you.')
      ])
    ])
  }
}

class ButcherShop extends React.Component {
  render(){
    return React.createElement(
      'div',
      {className: 'butcher-shop'},
      [
        React.createElement(
          'p',
          {key: 0},
          "Hello! We have the following products for sale today:"
        ),
        React.createElement(
          'ul',
          {key: 1},
          BUTCHER_PRODUCTS.map(function(product, index){
            return React.createElement('li', {}, product)
          })
        )
      ]
    )
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
