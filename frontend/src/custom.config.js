/**
 * Add your custom option overrides in here
 * See default.config.js for available options
 */
module.exports = () => {
  return {
    /* add your overides here */

	/** Set your repo userName/repoName */
	    repo: 'nerdguru/serverlessTodos',
	 /** Set your API endpoints returned from the backend deployment here */
	    api: {
	      // open: 'https://kouf9xf85f.execute-api.us-west-2.amazonaws.com/dev/issues',
	      // completed: 'https://kouf9xf85f.execute-api.us-west-2.amazonaws.com/dev/completed'
	      open: 'https://a3iuxl6h4m.execute-api.us-west-2.amazonaws.com/prod/open',
	      completed: 'https://a3iuxl6h4m.execute-api.us-west-2.amazonaws.com/prod/closed'
	    },

	columns: [
      {
        /** Column title */
        title: "discussing",
        /** Github labels to show in this column */
        githubTags: [
		  'wontfix',
          'kind/enhancement',
          'kind/feature',
          'kind/question',
          'stage/needs-feedback',
          'status/needs-attention'
        ],
      },
      {
        title: "waiting",
        githubTags: [
          'status/more-info-needed',
        ]
      },
      {
        title: "coding",
        githubTags: [
          'stage/accepted',
          'stage/in-progress',
        ]
      },
      {
        title: "reviewing",
        githubTags: [
          'stage/in-review',
        ]
      },
    ],
  }
}
