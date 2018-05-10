# Markdown Test

Some markdown text

Now we switch to HCL:

```hcl
// abc is not a valid entity name
abc {
  // abc is not a valid word
  // incorect is misspelled
  abc = "incorect"

  /*
  abc is still not a valid word
  */

  // abc is not a valid word (please stop using it..!)
  key = <<EOF
abc
abc
EOF
}
```
