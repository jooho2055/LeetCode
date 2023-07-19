class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> set = new HashSet<>();
	for(String addr : emails) {
		String[] parts = addr.split("@");
		parts[0] = parts[0].replaceAll("\\.", "");
		set.add(parts[0].split("\\+")[0]+"@"+parts[1]);
	}
	return set.size();
    }
}