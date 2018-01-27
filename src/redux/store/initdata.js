/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 初始化数据
*/

export default {
	app: {
		accesstoken: '',
		accessInfo: {
			success: false,
			loginname: '',
			avatar_url: '',
			id: ''
		},
		info: {
			avatar_url: '',
		    create_at: '',
		    githubUsername: '',
		    loginname: '',
		    recent_replies: [],
		    recent_topics: [],
		    score: 0
		},
		isAuthor: false,
		showInfo: false,
		count: {
			data: 0
		},
		hasRead: [],
		hasnotRead: []
	},
	home: {
		topics: [],
	},
	topic: {
		topic: {
			author: {
				avatar_url: '',
				loginname: ''
    		},
		    author_id: '',
		    content: '',
		    create_at: '',
		    good: false,
		    id: '',
		    is_collect: false,
		    last_reply_at: '',
		    replies: [{
		        author: {
		        	avatar_url: '',
		          	loginname: ''
		        },
		        content: '',
		        create_at: '',
		        id: '',
		        is_uped: false,
		        reply_id: null,
		        ups: [
		        ]
		    }],
		    reply_count: 0,
		    tab: '',
		    title: '',
		    top: false,
		    visit_count: 0
		},
	},
	user: {
		userInfo: {
			avatar_url: '',
		    create_at: '',
		    githubUsername: '',
		    loginname: '',
		    recent_replies: [],
		    recent_topics: [],
		    score: 0
		},
		collect: [],
		recentReplies: [],
		recentTopics: []
	},
	create: {
		status: {},
		updateStatus: {},
		topic: {
			author: {
				avatar_url: '',
				loginname: ''
    		},
		    author_id: '',
		    content: '',
		    create_at: '',
		    good: false,
		    id: '',
		    is_collect: false,
		    last_reply_at: '',
		    replies: [{
		        author: {
		        	avatar_url: '',
		          	loginname: ''
		        },
		        content: '',
		        create_at: '',
		        id: '',
		        is_uped: false,
		        reply_id: null,
		        ups: [
		        ]
		    }],
		    reply_count: 0,
		    tab: '',
		    title: '',
		    top: false,
		    visit_count: 0
		},
	}
};
