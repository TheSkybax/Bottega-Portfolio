tags_one = {
    'python',
    'coding',
    'tutorials',
    'coding'
}

tags_two = {
    'ruby',
    'coding',
    'tutorials',
    'development'
}

# Merged tags
merged_tags = tags_one | tags_two
print(merged_tags)

# Tags in tags_one but not in tags_two
exclusive_to_tag_one = tags_one - tags_two
print(exclusive_to_tag_one)

# Tags in tags_two but not in tags_one
exclusive_to_tag_two = tags_two - tags_one
print(exclusive_to_tag_two)

# Tags found in both tags_one and tags_two
universal_tags = tags_one & tags_two
print(universal_tags)
