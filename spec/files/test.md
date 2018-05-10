# Markdown Test

Some markdown text

Now we switch to HCL:

```hcl
// abc is not a valid entity name (but it is ignored)
abc {
  // abc is not a valid word (but it is ignored)
  // incorect is misspelled
  abc = "incorect"

  /*
  abc is still not a valid word
  */

  # abc is not going to become valid ever...

  // abc is not a valid word (please stop using it..!)
  // EOF is ignored (being a heredoc descriptor and all)
  key = <<EOF
abc
abc
EOF
}
```
