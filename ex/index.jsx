/*import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membro from './member'

ReactDOM.render(
    <div>
        <Familia sobrenome='Silva'>
            <Membro nome='Guilherme' />
            <Membro nome='Pedro' />
            <Membro nome='José' />
        </Familia>
    </div>
  , document.getElementById('app'))*/

import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
ReactDOM.render(
  <ClassComponent idade='21' />
, document.getElementById('app'))
  