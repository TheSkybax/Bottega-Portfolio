post = ('Python Basics', 'Intro guide to Python', 'Some cool python content', 'published')

# Removing elements from end
# post = post[:-2]

# Removing elements from beginning
# post = post[1:]

# Removing specific elements (messy/not recommended)
post = list(post)
post.remove('published')
post = tuple(post)

print(post)
