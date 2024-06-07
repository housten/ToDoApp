# Setting Up Tests

Show using Copilot to set up tests for a repository with @workspace
```prompt	
@workspace I would like to generate some more tests for this todo app.
```
Point out that 7 references were used.
Compare to this, which uses just one reference:
```prompt
Please suggest some more tests for my ToDo app
```
Accept the changes.
Point out the recommended next question, if it is a little interesting. If For example, in my case it was:
<br />
![Copilot suggests asking mimicking user interaction](images/prompt.png)
<br />
If suggestion is not so relevant, suggest the participants keep an eye on the suggestions.

```prompt
How can I ensure the tests always run before a pr can be accepted?
```

Specify  <p style="color: red;">What is the next prompt about?</p>
```prompt
it needs to be already integrated with github
```

strategy matrix
```prompt
can i run the tests for more than one version?
```

