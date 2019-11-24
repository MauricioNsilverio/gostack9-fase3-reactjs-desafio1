import React, { Component } from 'react';

import avatar from '../assets/images/avatar.JPG';
import idukAvatar from '../assets/images/idukAvatar.jpeg';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Maurício Nogueira Silvério',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém sabe se a iDuk está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod dictum mauris, a consectetur erat venenatis vitae. Praesent eget porttitor ligula, eget tempor mi. Proin consequat vel massa vel varius. Suspendisse id ultricies metus. In at aliquet nibh. Etiam sollicitudin libero id urna efficitur dictum et ac lectus. Integer sit amet velit eu velit placerat consectetur. In quis cursus eros. Vivamus mollis dignissim erat eget bibendum. Nunc tempor risus augue, sed porta dui scelerisque vel. Nulla nulla sapien, vehicula quis metus sed, commodo commodo ipsum. Phasellus aliquet pellentesque blandit. Aenean aliquam porttitor dolor, non euismod purus congue ut. Maecenas metus urna, congue eget consectetur a, suscipit eu nisi.'
          },
          {
            id: 2,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Lucas',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém trabalha com marketing digital?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod dictum mauris, a consectetur erat venenatis vitae. Praesent eget porttitor ligula, eget tempor mi. Proin consequat vel massa vel varius. Suspendisse id ultricies metus. In at aliquet nibh. Etiam sollicitudin libero id urna efficitur dictum et ac lectus. Integer sit amet velit eu velit placerat consectetur. In quis cursus eros. Vivamus mollis dignissim erat eget bibendum. Nunc tempor risus augue, sed porta dui scelerisque vel. Nulla nulla sapien, vehicula quis metus sed, commodo commodo ipsum. Phasellus aliquet pellentesque blandit. Aenean aliquam porttitor dolor, non euismod purus congue ut. Maecenas metus urna, congue eget consectetur a, suscipit eu nisi.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Maurício Nogueira Silvério',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém sabe se a iDuk está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 4,
        author: {
          name: 'Lucas',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém trabalha com marketing digital?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 5,
        author: {
          name: 'Maurício Nogueira Silvério',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém sabe se a iDuk está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          },
          {
            id: 2,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Lucas',
          avatar
        },
        date: '24 Nov 2019',
        content: 'Pessoal, alguém trabalha com marketing digital?',
        comments: [
          {
            id: 1,
            author: {
              name: 'iDuk',
              avatar: idukAvatar
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post-list">
        {posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default PostList;
