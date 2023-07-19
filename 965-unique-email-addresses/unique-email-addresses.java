class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> Eset = new HashSet<>();

        for (int i = 0; i < emails.length; i++){
            String[] splitString = emails[i].split("@");
            splitString[0] = splitString[0].split("\\+")[0].replace(".", "");
            String a = splitString[0] + "@" + splitString[1];
            Eset.add(a);
        }

        return Eset.size();
    }
}