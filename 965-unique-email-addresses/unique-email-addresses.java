class Solution {
    public int numUniqueEmails(String[] emails) {
        Map<String , Integer> Emap = new HashMap<>();

        for (int i = 0; i < emails.length; i++){
            String[] splitString = emails[i].split("@");
            splitString[0] = splitString[0].split("\\+")[0].replace(".", "");
            String a = splitString[0] + "@" + splitString[1];

            Emap.put(a, Emap.getOrDefault(a, 0) + 1);
        }

        return Emap.size();
    }
}